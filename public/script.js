// Todo App JavaScript
class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.editingTodoId = null;
        
        this.initializeElements();
        this.bindEvents();
        this.loadTodos();
    }

    initializeElements() {
        // Form elements
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.inputError = document.getElementById('inputError');
        
        // List elements
        this.todoList = document.getElementById('todoList');
        this.emptyState = document.getElementById('emptyState');
        this.todoCount = document.getElementById('todoCount');
        
        // Filter elements
        this.filterBtns = document.querySelectorAll('.filter-btn');
        
        // Action elements
        this.clearCompleted = document.getElementById('clearCompleted');
        
        // Status elements
        this.statusMessage = document.getElementById('statusMessage');
        this.loadingSpinner = document.getElementById('loadingSpinner');
    }

    bindEvents() {
        // Add todo events
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });
        
        // Filter events
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });
        
        // Clear completed
        this.clearCompleted.addEventListener('click', () => this.clearCompletedTodos());
        
        // Input validation
        this.todoInput.addEventListener('input', () => this.hideError());
    }

    // API Methods
    async apiRequest(url, options = {}) {
        this.showLoading();
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Request failed');
            }
            
            return data;
        } catch (error) {
            console.error('API Error:', error);
            this.showStatus(error.message, 'error');
            throw error;
        } finally {
            this.hideLoading();
        }
    }

    async loadTodos() {
        try {
            // Try to load from API first
            const response = await this.apiRequest('/api/todos');
            this.todos = response.data || [];
            
            // Save to localStorage as backup
            this.saveToLocalStorage();
        } catch (error) {
            // Fallback to localStorage if API fails
            console.log('API unavailable, loading from localStorage');
            this.loadFromLocalStorage();
        }
        
        this.renderTodos();
        this.updateStats();
    }

    async addTodo() {
        const text = this.todoInput.value.trim();
        
        if (!this.validateInput(text)) {
            return;
        }

        try {
            // Try API first
            const response = await this.apiRequest('/api/todos', {
                method: 'POST',
                body: JSON.stringify({ text })
            });
            
            this.todos.push(response.data);
            this.showStatus('Todo added successfully!', 'success');
        } catch (error) {
            // Fallback to localStorage
            const newTodo = {
                id: Date.now(),
                text,
                completed: false,
                createdAt: new Date().toISOString()
            };
            this.todos.push(newTodo);
            this.showStatus('Todo added (saved locally)', 'success');
        }

        this.saveToLocalStorage();
        this.todoInput.value = '';
        this.renderTodos();
        this.updateStats();
    }

    async updateTodo(id, updates) {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) return;

        const oldTodo = { ...this.todos[todoIndex] };
        
        try {
            // Try API first
            const response = await this.apiRequest(`/api/todos/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updates)
            });
            
            this.todos[todoIndex] = response.data;
            this.showStatus('Todo updated successfully!', 'success');
        } catch (error) {
            // Fallback to localStorage
            this.todos[todoIndex] = { ...oldTodo, ...updates, updatedAt: new Date().toISOString() };
            this.showStatus('Todo updated (saved locally)', 'success');
        }

        this.saveToLocalStorage();
        this.renderTodos();
        this.updateStats();
    }

    async deleteTodo(id) {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) return;

        const todoToDelete = this.todos[todoIndex];
        
        try {
            // Try API first
            await this.apiRequest(`/api/todos/${id}`, {
                method: 'DELETE'
            });
            
            this.todos.splice(todoIndex, 1);
            this.showStatus('Todo deleted successfully!', 'success');
        } catch (error) {
            // Fallback to localStorage
            this.todos.splice(todoIndex, 1);
            this.showStatus('Todo deleted (saved locally)', 'success');
        }

        this.saveToLocalStorage();
        this.renderTodos();
        this.updateStats();
    }

    // Local Storage Methods
    saveToLocalStorage() {
        try {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }
    }

    loadFromLocalStorage() {
        try {
            const stored = localStorage.getItem('todos');
            this.todos = stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            this.todos = [];
        }
    }

    // UI Methods
    validateInput(text) {
        this.hideError();
        
        if (!text) {
            this.showError('Please enter a todo item');
            return false;
        }
        
        if (text.length > 500) {
            this.showError('Todo text must be less than 500 characters');
            return false;
        }
        
        return true;
    }

    showError(message) {
        this.inputError.textContent = message;
        this.inputError.style.display = 'block';
        this.todoInput.focus();
    }

    hideError() {
        this.inputError.style.display = 'none';
    }

    showStatus(message, type = 'success') {
        this.statusMessage.textContent = message;
        this.statusMessage.className = `status-message ${type}`;
        this.statusMessage.style.display = 'block';
        
        setTimeout(() => {
            this.statusMessage.style.display = 'none';
        }, 3000);
    }

    showLoading() {
        this.loadingSpinner.style.display = 'flex';
    }

    hideLoading() {
        this.loadingSpinner.style.display = 'none';
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active filter button
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.renderTodos();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }

    renderTodos() {
        const filteredTodos = this.getFilteredTodos();
        
        if (filteredTodos.length === 0) {
            this.todoList.style.display = 'none';
            this.emptyState.style.display = 'block';
        } else {
            this.todoList.style.display = 'block';
            this.emptyState.style.display = 'none';
            
            this.todoList.innerHTML = filteredTodos.map(todo => this.createTodoHTML(todo)).join('');
            
            // Bind events for todo items
            this.bindTodoEvents();
        }
    }

    createTodoHTML(todo) {
        return `
            <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" 
                     onclick="app.toggleTodo(${todo.id})"></div>
                <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                <div class="todo-actions">
                    <button class="edit-btn" onclick="app.startEdit(${todo.id})">Edit</button>
                    <button class="delete-btn" onclick="app.deleteTodo(${todo.id})">Delete</button>
                </div>
            </div>
        `;
    }

    bindTodoEvents() {
        // Events are bound via onclick in HTML for simplicity
        // In a larger app, we'd use event delegation
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            this.updateTodo(id, { completed: !todo.completed });
        }
    }

    startEdit(id) {
        if (this.editingTodoId) {
            this.cancelEdit();
        }
        
        this.editingTodoId = id;
        const todo = this.todos.find(t => t.id === id);
        const todoItem = document.querySelector(`[data-id="${id}"]`);
        
        if (todo && todoItem) {
            todoItem.classList.add('editing');
            todoItem.innerHTML = `
                <div class="todo-checkbox ${todo.completed ? 'checked' : ''}"></div>
                <input type="text" class="todo-edit-input" value="${this.escapeHtml(todo.text)}" maxlength="500">
                <div class="todo-edit-actions">
                    <button class="save-btn" onclick="app.saveEdit(${id})">Save</button>
                    <button class="cancel-btn" onclick="app.cancelEdit()">Cancel</button>
                </div>
            `;
            
            const input = todoItem.querySelector('.todo-edit-input');
            input.focus();
            input.select();
            
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.saveEdit(id);
                } else if (e.key === 'Escape') {
                    this.cancelEdit();
                }
            });
        }
    }

    saveEdit(id) {
        const todoItem = document.querySelector(`[data-id="${id}"]`);
        const input = todoItem.querySelector('.todo-edit-input');
        const newText = input.value.trim();
        
        if (!this.validateInput(newText)) {
            return;
        }
        
        this.updateTodo(id, { text: newText });
        this.editingTodoId = null;
    }

    cancelEdit() {
        this.editingTodoId = null;
        this.renderTodos();
    }

    updateStats() {
        const activeTodos = this.todos.filter(todo => !todo.completed);
        this.todoCount.textContent = activeTodos.length;
        
        const completedTodos = this.todos.filter(todo => todo.completed);
        this.clearCompleted.style.display = completedTodos.length > 0 ? 'block' : 'none';
    }

    async clearCompletedTodos() {
        const completedTodos = this.todos.filter(todo => todo.completed);
        
        if (completedTodos.length === 0) return;
        
        if (!confirm(`Delete ${completedTodos.length} completed todo(s)?`)) {
            return;
        }
        
        // Delete completed todos one by one
        for (const todo of completedTodos) {
            try {
                await this.apiRequest(`/api/todos/${todo.id}`, { method: 'DELETE' });
            } catch (error) {
                // Continue with localStorage fallback
            }
        }
        
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveToLocalStorage();
        this.renderTodos();
        this.updateStats();
        this.showStatus('Completed todos cleared!', 'success');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TodoApp();
});