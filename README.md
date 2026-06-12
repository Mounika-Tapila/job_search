# 🚀 JobHub Pro - Full Stack Job Portal

## 📌 Overview

JobHub Pro is a full-stack job portal that enables users to search and apply for jobs through a secure and user-friendly platform. The application provides authentication, job management, application tracking, and user profile features, helping job seekers manage their job search efficiently.

## ✨ Features

### 👤 User Features

* User Registration and Login
* Secure JWT Authentication
* Browse Available Jobs
* Search Jobs by Title, Company, or Location
* Apply for Jobs
* View Applied Jobs
* User Profile Dashboard
* Application Status Tracking

### 🏢 Company Features

* Post New Job Openings
* Manage Job Listings
* View Applicants

### 📊 Profile Dashboard

* Total Applications Submitted
* Pending Applications
* Rejected Applications
* Shortlisted Applications
* Saved Jobs Count

### 🔄 Real-Time Updates

* Automatic Job Updates
* Dynamic Job Listings
* Live Application Tracking

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT (JSON Web Token)
* bcrypt.js

### Other Tools

* Git & GitHub
* Postman
* Node-Cron

---

## 📂 Project Structure

jobhub-pro/

├── frontend/

│ ├── src/

│ ├── public/

│ └── package.json

│

├── backend/

│ ├── models/

│ ├── middleware/

│ ├── routes/

│ ├── index.js

│ └── package.json

│

└── README.md

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/jobhub-pro.git
cd jobhub-pro
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Start Backend Server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Application will run at:

```bash
http://localhost:3000
```

Backend API:

```bash
http://localhost:5000
```

---

## 🔐 Authentication

The application uses JWT-based authentication:

* User Login
* Token Generation
* Protected Routes
* Authorization Middleware
* Secure Password Hashing using bcrypt

---

## 📸 Screenshots

Add screenshots of:

* Login Page
* Registration Page
* Job Dashboard
* Applications Page
* Profile Dashboard

---

## 🚀 Future Enhancements

* Resume Upload Feature
* AI-Based Job Recommendations
* Email Notifications
* Company Dashboard
* Interview Scheduling
* Advanced Job Filters
* Saved Jobs Management

---

## 👨‍💻 Author

**Tapila Mounika**

* GitHub: https://github.com/Mounika-Tapila
* Email: [t.mounisudha@gmail.com](mailto:t.mounisudha@gmail.com)

---

## 📄 License

This project is developed for educational and learning purposes.
