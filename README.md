# 📋 Express.js Todo List Application

A modern, full-featured todo list application built with Express.js and vanilla JavaScript. Features a beautiful responsive UI with local storage persistence and RESTful API endpoints.

![Todo App Screenshot](https://github.com/user-attachments/assets/b978d762-c700-4a92-8371-149539e93ab0)

## ✨ Features

- ✅ **Add, Edit, Delete** todos with full CRUD operations
- 🔄 **RESTful API** endpoints for all todo operations
- 💾 **Local Storage** persistence - data survives page reloads
- 🎨 **Beautiful UI** with modern design and smooth animations
- 📱 **Responsive Design** - works perfectly on mobile and desktop
- 🔍 **Smart Filtering** - view All, Active, or Completed todos
- ✏️ **Inline Editing** - edit todos directly in the list
- ✅ **Input Validation** - prevents empty todos and handles errors gracefully
- 🚀 **Vercel Ready** - configured for serverless deployment
- 🌐 **Fallback Support** - works offline using localStorage when API is unavailable

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd park-group
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── server.js          # Express.js server with RESTful API
├── public/
│   ├── index.html     # Main HTML structure
│   ├── style.css      # Modern CSS styling
│   └── script.js      # Frontend JavaScript application
├── vercel.json        # Vercel deployment configuration
└── package.json       # Dependencies and scripts
```

## 🔌 API Endpoints

### Get All Todos
```http
GET /api/todos
```

### Create New Todo
```http
POST /api/todos
Content-Type: application/json

{
  "text": "Your todo text"
}
```

### Update Todo
```http
PUT /api/todos/:id
Content-Type: application/json

{
  "text": "Updated text",
  "completed": true
}
```

### Delete Todo
```http
DELETE /api/todos/:id
```

## 🎨 Features Showcase

### Validation & Error Handling
![Validation Screenshot](https://github.com/user-attachments/assets/de3f1497-95a5-4b96-a72b-37fcebc8cf1f)

The application includes comprehensive validation:
- Prevents empty todo submission
- 500 character limit enforcement
- User-friendly error messages
- API error handling with fallback to localStorage

### Smart Data Persistence
- **Primary**: RESTful API with Express.js server
- **Fallback**: Browser localStorage for offline functionality
- **Seamless**: Automatically syncs between API and localStorage

### Modern UI/UX
- Beautiful gradient background
- Smooth animations and transitions
- Hover effects and visual feedback
- Mobile-first responsive design
- Intuitive icons and typography

## 🚀 Deployment

### Vercel (Recommended)
This app is ready for Vercel deployment with included `vercel.json` configuration:

1. Connect your repository to Vercel
2. Deploy automatically - no additional configuration needed
3. The serverless function will handle all API routes

### Other Platforms
The app can be deployed to any Node.js hosting platform:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS Lambda (with adapter)

## 🛠️ Development

### Available Scripts
- `npm start` - Start the production server
- `npm run dev` - Start the development server (same as start)
- `npm run build` - No build step required (returns success)

### Technology Stack
- **Backend**: Express.js, CORS, Morgan
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Storage**: In-memory (server) + localStorage (client)
- **Deployment**: Vercel serverless functions

## 📝 Usage Examples

### Adding a Todo
1. Type your todo in the input field
2. Click "Add Todo +" or press Enter
3. Todo appears in the list immediately

### Editing a Todo
1. Click the "Edit" button on any todo
2. Modify the text in the inline editor
3. Click "Save" or press Enter to confirm

### Filtering Todos
- **All**: Shows all todos
- **Active**: Shows only incomplete todos
- **Completed**: Shows only completed todos

### Completing Todos
- Click the circular checkbox to mark todos as complete
- Completed todos are visually distinguished with strikethrough text

## 🔒 Data Persistence

The application uses a hybrid approach for data persistence:

1. **Server Memory**: Todos are stored in server memory during runtime
2. **localStorage**: Client-side backup ensures data survives page reloads
3. **Fallback Logic**: If API is unavailable, falls back to localStorage seamlessly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
