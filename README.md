# MiniPost

A simple Postman-like API testing tool built from scratch with React and Node.js. The goal is to understand what happens behind the scenes when we send an API request, rather than simply using an existing API testing tool.

## What We're Building

MiniPost allows you to:

- Enter an API URL
- Select an HTTP method
- Add request headers
- Add a request body
- Send the request
- View the API response
- Inspect status codes, JSON data, and response time

## Architecture

```text
React Frontend
      ↓
Node + Express Backend
      ↓
External API
      ↑
Node + Express Backend
      ↑
React Frontend
```

## 🛠️ Tech Stack

- React
- Vite
- Node.js
- Express
- JavaScript
- Fetch API
- HTTP / REST APIs

## 📁 Project Structure

```
mini-postman/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── HeadersEditor.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── ...
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shresthap21/mini-postman.git
cd mini-postman
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

### 4. Start the frontend

Inside the `client` directory:

```bash
npm run dev
```

The frontend will be available at the Vite development URL shown in your terminal.

### 5. Start the backend

Inside the `server` directory:

```bash
node server.js
```

The backend will run on:

```
http://localhost:5000
```

## 🧪 Testing the Backend

Open:

```
http://localhost:5000
```

You should see:

```json
{
  "message": "MiniPost API server is running"
}
```

## 🔗 Example APIs

You can use public APIs while testing MiniPost.

**GET**
```
https://jsonplaceholder.typicode.com/users
```

**GET a single resource**
```
https://jsonplaceholder.typicode.com/users/1
```

**POST**
```
https://jsonplaceholder.typicode.com/posts
```

Example body:

```json
{
  "title": "MiniPost",
  "body": "Testing an API",
  "userId": 1
}
```

For JSON requests, add:

```
Content-Type: application/json
```

## Concepts Covered

The project is designed to demonstrate:

- How HTTP requests work
- How HTTP responses work
- GET and POST requests
- Request URLs
- Request headers
- Request bodies
- HTTP status codes
- JSON responses
- The Fetch API
- React state and controlled inputs
- Frontend to backend communication
- Express routes
- Server-side API requests
- Error handling
- API response inspection

## Request Flow

When the user clicks **Send**, the request follows this flow:

1. User enters the request details
2. React creates the request configuration
3. React sends the configuration to our Express backend
4. Express validates the URL and prepares the request
5. Express makes the actual HTTP request to the external API
6. The external API returns a response
7. Express reads the response status, headers, timing, and body
8. React displays the response information

## Goal

The goal of MiniPost is to build the core functionality ourselves to understand the fundamentals of APIs, HTTP communication, frontend-backend architecture, and what actually happens when we click Send in an API testing tool.

## Useful Resources

- [MDN HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
