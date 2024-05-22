# Teacher-portal-backend

## Description
This is the backend application for the Teacher Portal project. It provides APIs for managing students and users.

## Features
- **Authentication:** Users can register and login to access the system.
- **Student Management:** CRUD operations for managing student records.
- **User Management:** Basic user management functionalities.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt.js for password hashing

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up environment (I have pushed the .env file too, In general we never push the .env file).
4. Start the server: `npm start`

## API Endpoints
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login and obtain an access token.
- `GET /api/students`: Get all students.
- `POST /api/students`: Create a new student record.
- `GET /api/students/:id`: Get a specific student.
- `PUT /api/students/:id`: Update a student record.
- `DELETE /api/students/:id`: Delete a student record.

## Contributors
- [Brajesh Kumar Chaurasiya ](https://github.com/KumarBrajesh12)
