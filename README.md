# Adechen
Adechen is a full-stack web application for creating, managing, and publishing design Branches inspired by the Adech design ecosystem.

The project is based on the structure used in Adech Themes, where a Branch represents a visual direction, each Branch contains Subbranches, and each Subbranch contains reusable Color Tokens.

## Backend Setup
The backend uses Node.js, Express, Prisma 6, and SQLite.

Install server dependencies:

```bash
cd server
npm install
```

Create a `.env` file based on the `.env.example` file.

```bash
cp .env.example .env
```

Run the database migrations:

```bash
npx prisma migrate dev
```

Run the development server:

```bash
npm run dev
```

Health check:

```bash
GET https://localhost:3000/health
```

Example response:

```json
{
  "status": "ok",
  "service": "adechen-api"
}
```

Auth Endpoints

```txt
POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
```

Register

Creates a new user account.

```txt
POST /api/auth/register
```

Example request body:

```json
{
  "name": "Alejandro",
  "email": "alejandro@example.com",
  "password": "password123"
}
```

Example response:

```json
{
  "user": {
    "id": "user_id",
    "name": "Alejandro",
    "email": "alejandro@example.com"
  },
  "token": "jwt_token"
}
```

Login

Authenticates an existing user.

```txt
POST /api/auth/login
```

Example request body:

```json
{
  "email": "alejandro@example.com",
  "password": "password123"
}
```

Example response:

```json
{
  "user": {
    "id": "user_id",
    "name": "Alejandro",
    "email": "alejandro@example.com"
  },
  "token": "jwt_token"
}
```

Current User

Returns the authenticated user.

```txt
GET /api/auth/me
```

Protected endpoints require a Bearer token:

```txt
Authorization: Bearer <token>
```

Example response:

```json
{
  "user": {
    "id": "user_id",
    "name": "Alejandro",
    "email": "alejandro@example.com"
  }
}
```

If no token is provided, the API returns:

```json
{
  "message": "Authentication token is required."
}
```
