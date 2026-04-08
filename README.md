# 🚀 Task Master

A full-stack task management application built using **React, Express, Prisma, and PostgreSQL**.

---

## 📌 Features

* ✅ Create tasks with title, description, priority, and due date
* ✅ Mark tasks as complete / undo
* ✅ Delete tasks
* ✅ Filter tasks (All / Pending / Completed)
* ✅ Sort tasks by priority and due date
* ✅ Overdue task indicator

---

## 🛠 Tech Stack

### Frontend

* React (Vite)

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

---

## 📁 Project Structure

```
taskmaster/
 ├── taskmaster-api       # Backend
 ├── taskmaster-frontend  # Frontend
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/faizavk/taskmaster.git
cd taskmaster
```

---

### 2. Backend setup

```
cd taskmaster-api
npm install
```

Create `.env` file:

```
DATABASE_URL=your_postgres_connection_string
```

Run:

```
npx prisma migrate dev
node src/server.js
```

---

### 3. Frontend setup

```
cd taskmaster-frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

* GET `/api/health`
* GET `/api/tasks`
* POST `/api/tasks`
* PATCH `/api/tasks/:id/toggle`
* DELETE `/api/tasks/:id`

---

## 🧪 Testing

You can test APIs using:

* Thunder Client
* Postman

---

## 🎯 Future Improvements

* User authentication
* Better UI/UX
* Deployment

---

## 👩‍💻 Author

Faiza V K

---
