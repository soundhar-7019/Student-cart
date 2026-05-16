# 🎓 Student Management CRUD App

A full-stack Student Management application built with a **Node.js/Express/MongoDB** backend and a **Vanilla JavaScript** frontend.

---

## 📁 Project Structure

```
student-crud-app/
├── backend/
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── model/
│   │   └── student.js      # Student Mongoose model
│   ├── server.js           # Express server & API routes
│   └── package.json        # Backend dependencies
└── frontend/
    └── index.html          # Single-page frontend (HTML/CSS/JS)
```

---

## 🚀 Features

- ➕ **Create** a new student record
- 📋 **Read** and display all students
- ✏️ **Update** existing student details
- 🗑️ **Delete** a student record

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js v5 | Web framework & REST API |
| MongoDB | NoSQL database |
| Mongoose | ODM for MongoDB |
| CORS | Cross-origin resource sharing |
| Nodemon | Auto-restart during development |

### Frontend
| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling |
| Vanilla JavaScript | Logic & API calls (Fetch API) |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/student-crud-app.git
   cd student-crud-app/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure the database:**

   Create a `config/db.js` file:
   ```js
   const mongoose = require("mongoose");

   const connectDB = async () => {
     await mongoose.connect("mongodb://localhost:27017/studentdb");
     console.log("MongoDB connected");
   };

   module.exports = connectDB;
   ```

4. **Start the server:**
   ```bash
   node server.js
   ```

   The server will run at `http://localhost:3000`.

### Frontend Setup

No build step needed. Simply open `frontend/index.html` in your browser.

> ⚠️ Make sure the backend server is running before opening the frontend.

---

## 📡 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/students` | Get all students |
| `GET` | `/students/:id` | Get a single student |
| `POST` | `/students` | Create a new student |
| `PUT` | `/students/:id` | Update a student |
| `DELETE` | `/students/:id` | Delete a student |

### Request Body (POST / PUT)

```json
{
  "name": "John Doe",
  "age": 20,
  "course": "Computer Science",
  "email": "john@example.com"
}
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
