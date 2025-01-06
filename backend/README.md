# 💳 Payments App Backend

This is the backend server for the **Payments App**, providing API endpoints for account management, user authentication, and user interactions. Built with **Node.js** and **Express**.

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)

### 🔧 Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/shubhhhGT/Payments_App/tree/main/backend.git
   cd backend
```
2. **Install dependencies:**
  ```bash
  npm install
```
### 📝 Configuration
Create a .env file in the root directory and add the necessary environment variables:
```
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### Running the Server
```
node index.js
```

### 🔌 API Endpoints
**Authentication Routes**
POST /auth/signup
Description: Sign up a new user.
Request Body:
```
{
  "firstname": "john",
  "lastname": "doe",
  "username": "johndoe@example.com",
  "password": "123456"
}
```

POST /auth/signin
Description: Sign in an existing user.
Request Body:
```
{
  "username": "johndoe@example.com",
  "password": "123456"
}
```

**Account Routes**
GET /account/balance
- Description: Get the current balance of the authenticated user.
- Headers: Authorization: Bearer <token>

POST /account/transfer
- Description: Transfer balance to another user.
- Headers: Authorization: Bearer <token>
- Request Body:
```
{
  "to": "userId",
  "amount": 100
}
```

**User Routes**
PUT /user
- Description: Update the credentials of the authenticated user.
- Headers: Authorization: Bearer <token>
- Request Body:
```
{
  "firstname": "john",
  "lastname": "doe",
  "password": "newpassword"
}
```
GET /user/bulk
- Description: Search for a friend.
- Headers: Authorization: Bearer <token>

GET /user/getCurrentUser
- Description: Get details of the currently authenticated user.
- Headers: Authorization: Bearer <token>

### 🛡️ Middleware
**Auth Middleware**

The auth middleware is used to protect routes that require authentication. It verifies the JWT token provided in the request headers.

