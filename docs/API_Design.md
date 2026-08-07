# API Design

Project: Novfolio

Version: 1.0

Architecture: REST API

Backend: FastAPI

Database: PostgreSQL

Authentication: JWT

Status: Draft

---

# API Standards

Base URL

/api/v1

Example

/api/v1/auth/login

---

Authentication

Protected routes require

Authorization: Bearer <JWT_TOKEN>

---

Content Type

application/json

---

Success Response

{
"success": true,
"message": "Operation successful",
"data": {}
}

---

Error Response

{
"success": false,
"message": "Invalid credentials",
"errors": []
}

for register
Request
POST /api/v1/auth/register
{
"email":"john@gmail.com",
"password":"**\*\*\*\***"
}

Response
{
"success":true,
"message":"Account created successfully"
}

POST /api/v1/auth/login
Request
{
"email":"john@gmail.com",
"password":"**\*\*\*\***"
}

Response
{
"token":"JWT",
"user":{
...
}
}

for logout
POST /api/v1/auth/logout

forgot password
POST /api/v1/auth/forgot-password
