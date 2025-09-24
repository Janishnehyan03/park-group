const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for todos (in real app, this would be a database)
let todos = [
  { id: 1, text: 'Learn Express.js', completed: false, createdAt: new Date().toISOString() },
  { id: 2, text: 'Build a to-do app', completed: false, createdAt: new Date().toISOString() }
];
let nextId = 3;

// Helper function to find todo by id
const findTodoById = (id) => todos.find(todo => todo.id === parseInt(id));

// Helper function to validate todo data
const validateTodo = (text) => {
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return false;
  }
  if (text.trim().length > 500) {
    return false;
  }
  return true;
};

// API Routes

// GET /api/todos - Get all todos
app.get('/api/todos', (req, res) => {
  try {
    res.json({
      success: true,
      data: todos,
      count: todos.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch todos'
    });
  }
});

// POST /api/todos - Create new todo
app.post('/api/todos', (req, res) => {
  try {
    const { text } = req.body;
    
    if (!validateTodo(text)) {
      return res.status(400).json({
        success: false,
        error: 'Todo text is required and must be between 1-500 characters'
      });
    }

    const newTodo = {
      id: nextId++,
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    todos.push(newTodo);

    res.status(201).json({
      success: true,
      data: newTodo,
      message: 'Todo created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create todo'
    });
  }
});

// PUT /api/todos/:id - Update todo
app.put('/api/todos/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    
    const todo = findTodoById(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }

    // Validate text if provided
    if (text !== undefined && !validateTodo(text)) {
      return res.status(400).json({
        success: false,
        error: 'Todo text must be between 1-500 characters'
      });
    }

    // Update fields
    if (text !== undefined) {
      todo.text = text.trim();
    }
    if (completed !== undefined) {
      todo.completed = Boolean(completed);
    }
    
    todo.updatedAt = new Date().toISOString();

    res.json({
      success: true,
      data: todo,
      message: 'Todo updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update todo'
    });
  }
});

// DELETE /api/todos/:id - Delete todo
app.delete('/api/todos/:id', (req, res) => {
  try {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Todo not found'
      });
    }

    const deletedTodo = todos.splice(todoIndex, 1)[0];

    res.json({
      success: true,
      data: deletedTodo,
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete todo'
    });
  }
});

// Serve the main HTML file for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Todo app server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} to view the application`);
});

module.exports = app;