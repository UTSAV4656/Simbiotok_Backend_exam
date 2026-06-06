# 🎓 College Course Enrollment System API

A RESTful API built with **NestJS**, **TypeORM**, **MySQL**, and **JWT Authentication** for managing college course enrollments.

## 📌 Features

### 🔐 Authentication & Admin Management

* Admin Registration
* Admin Login
* JWT Token Generation
* Password Hashing using bcrypt

### 👨‍🎓 Student Management

* Create Student
* Get All Students
* Get Student By ID
* Update Student
* Delete Student

### 📚 Course Management

* Create Course
* Get All Courses
* Get Course By ID
* Update Course
* Delete Course

### 📝 Enrollment Management

* Enroll Student into Course
* View All Enrollments
* Prevent Duplicate Enrollment
* Prevent Enrollment Beyond Course Capacity

### 📖 API Documentation

* Swagger UI Integration
* Interactive API Testing

---

# 🏗️ Tech Stack

* NestJS
* TypeScript
* MySQL / MariaDB
* TypeORM
* JWT Authentication
* Swagger
* Class Validator
* bcrypt

---

# 📂 Project Structure

```bash
src/
│
├── auth/
│   ├── controllers
│   ├── services
│   ├── dto
│   ├── entities
│   └── strategies
│
├── student/
│   ├── controllers
│   ├── services
│   ├── dto
│   └── entities
│
├── course/
│   ├── controllers
│   ├── services
│   ├── dto
│   └── entities
│
├── enrollment/
│   ├── controllers
│   ├── services
│   ├── dto
│   └── entities
│
├── common/
│   └── filters
│
├── app.module.ts
└── main.ts
```

---

# 🗄️ Database Design

## Admin

| Field    | Type    |
| -------- | ------- |
| id       | int     |
| name     | varchar |
| email    | varchar |
| password | varchar |

## Student

| Field | Type    |
| ----- | ------- |
| id    | int     |
| name  | varchar |
| email | varchar |
| phone | varchar |

## Course

| Field       | Type    |
| ----------- | ------- |
| id          | int     |
| title       | varchar |
| description | text    |
| maxCapacity | int     |

## Enrollment

| Field       | Type      |
| ----------- | --------- |
| id          | int       |
| student_id  | int       |
| course_id   | int       |
| enrolled_at | timestamp |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/UTSAV4656/Simbiotok_Backend_exam.git
cd Simbiotok_Backend_exam
```

## Install Dependencies

```bash
npm install
```

## Configure Database

Create a MySQL database:

```sql
CREATE DATABASE college_db;
```

Update database credentials in:

```bash
src/app.module.ts
```

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'college_db',
  synchronize: true,
});
```

## Run Application

```bash
npm run start
```

Development Mode:

```bash
npm run start:dev
```

---

# 🔑 API Endpoints

## Authentication

| Method | Endpoint       |
| ------ | -------------- |
| POST   | /auth/register |
| POST   | /auth/login    |

## Students

| Method | Endpoint      |
| ------ | ------------- |
| POST   | /students     |
| GET    | /students     |
| GET    | /students/:id |
| PUT    | /students/:id |
| DELETE | /students/:id |

## Courses

| Method | Endpoint     |
| ------ | ------------ |
| POST   | /courses     |
| GET    | /courses     |
| GET    | /courses/:id |
| PUT    | /courses/:id |
| DELETE | /courses/:id |

## Enrollments

| Method | Endpoint     |
| ------ | ------------ |
| POST   | /enrollments |
| GET    | /enrollments |

---

# 🧠 Business Rules Implemented

### Duplicate Enrollment Prevention

A student cannot enroll in the same course more than once.

```text
Student A → NestJS Course
❌ Cannot Enroll Again
```

### Course Capacity Validation

Enrollment is blocked when maximum capacity is reached.

```text
Course Capacity = 2

Student 1 ✅
Student 2 ✅
Student 3 ❌
```

### Database-Level Protection

Unique Constraint:

```sql
UNIQUE(student_id, course_id)
```

Prevents duplicate enrollments even at database level.

---

# 📖 Swagger Documentation

After starting the server:

```bash
http://localhost:3000/api
```

Use Swagger UI to test all APIs directly from the browser.

---

# 🚀 Future Improvements

* Role Based Authorization
* Refresh Tokens
* Pagination & Filtering
* Email Notifications
* Docker Support
* Unit Testing
* CI/CD Pipeline

---

# 👨‍💻 Author

**Utsav Boghani**

Backend Developer | NestJS | Node.js | TypeScript | MySQL

GitHub:
https://github.com/UTSAV4656
