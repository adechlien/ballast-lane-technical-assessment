# Adechen

Adechen is a full-stack web application for creating, managing, and publishing design Branches inspired by the Adech design ecosystem.

The project is based on the structure used in Adech Themes, where a Branch represents a visual direction, each Branch contains Subbranches, and each Subbranch contains reusable Color Tokens.

## Backend Setup

The backend uses Node.js, Express, Prisma 6, and SQLite.

### Install dependencies

Go to the server folder and install the backend dependencies:

cd server
npm install

### Environment variables

Create a `.env` file based on the `.env.example` file:

cp .env.example .env

The `.env` file should include:

PORT=3000
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"

### Database

Run the database migrations:

npx prisma migrate dev

Open Prisma Studio:

npx prisma studio

### Development server

Run the development server:

npm run dev

The API should be available at:

[http://localhost:3000](http://localhost:3000)

### Health Check

GET /health

Example response:

{
"status": "ok",
"service": "adechen-api"
}

## Backend API

### Authentication Endpoints

POST /api/auth/register
POST /api/auth/login
GET /api/auth/me

### Register

Creates a new user account.

Endpoint:

POST /api/auth/register

Example request body:

{
"name": "Alejandro",
"email": "[alejandro@example.com](mailto:alejandro@example.com)",
"password": "password123"
}

Example response:

{
"user": {
"id": "user_id",
"name": "Alejandro",
"email": "[alejandro@example.com](mailto:alejandro@example.com)"
},
"token": "jwt_token"
}

### Login

Authenticates an existing user.

Endpoint:

POST /api/auth/login

Example request body:

{
"email": "[alejandro@example.com](mailto:alejandro@example.com)",
"password": "password123"
}

Example response:

{
"user": {
"id": "user_id",
"name": "Alejandro",
"email": "[alejandro@example.com](mailto:alejandro@example.com)"
},
"token": "jwt_token"
}

### Current User

Returns the authenticated user.

Endpoint:

GET /api/auth/me

Protected endpoints require a Bearer token:

Authorization: Bearer <token>

Example response:

{
"user": {
"id": "user_id",
"name": "Alejandro",
"email": "[alejandro@example.com](mailto:alejandro@example.com)"
}
}

If no token is provided, the API returns:

{
"message": "Authentication token is required."
}

## Branch Endpoints

These endpoints require a Bearer token:

Authorization: Bearer <token>

Available endpoints:

GET /api/me/branches
POST /api/me/branches
PATCH /api/me/branches/:id
DELETE /api/me/branches/:id
PATCH /api/me/branches/:id/publish
PATCH /api/me/branches/:id/unpublish

### Create Branch

Creates a new private Branch owned by the authenticated user.

Endpoint:

POST /api/me/branches

Example request body:

{
"name": "Superior",
"description": "Main theme in Adech Themes.",
"mood": "Cold, calm, introspective"
}

Example response:

{
"branch": {
"id": "branch_id",
"name": "Superior",
"slug": "superior",
"description": "Main theme in Adech Themes.",
"mood": "Cold, calm, introspective",
"isPublic": false,
"ownerId": "user_id",
"subbranches": []
}
}

### List Own Branches

Returns all Branches owned by the authenticated user.

Endpoint:

GET /api/me/branches

### Update Branch

Updates an owned Branch.

Endpoint:

PATCH /api/me/branches/:id

Example request body:

{
"description": "Superior is the main Branch inside the Adech Themes ecosystem.",
"mood": "Cold, calm, introspective, structured"
}

### Delete Branch

Deletes an owned Branch.

Endpoint:

DELETE /api/me/branches/:id

### Publish Branch

Publishes an owned Branch.

Endpoint:

PATCH /api/me/branches/:id/publish

### Unpublish Branch

Unpublishes an owned Branch.

Endpoint:

PATCH /api/me/branches/:id/unpublish

### Branch Business Rules

* Only authenticated users can create Branches.
* Only the owner of a Branch can edit, delete, publish, or unpublish it.
* A Branch cannot be published unless it has at least one Subbranch.

## Subbranch Endpoints

These endpoints require a Bearer token:

Authorization: Bearer <token>

Available endpoints:

POST /api/me/branches/:branchId/subbranches
PATCH /api/me/branches/:branchId/subbranches/:subbranchId
DELETE /api/me/branches/:branchId/subbranches/:subbranchId

### Create Subbranch

Creates a new Subbranch inside an owned Branch.

Endpoint:

POST /api/me/branches/:branchId/subbranches

Example request body:

{
  "name": "Boulevard",
  "description": "The city, distance, and the quiet loneliness that can exist even in a crowded world."
}

### Update Subbranch

Updates a Subbranch inside an owned Branch.

Endpoint:

PATCH /api/me/branches/:branchId/subbranches/:subbranchId

Example request body:

{
  "description": "The city, distance, and quiet urban loneliness inside the Superior Branch."
}

### Delete Subbranch

Deletes a Subbranch inside an owned Branch.

Endpoint:

DELETE /api/me/branches/:branchId/subbranches/:subbranchId

### Subbranch Business Rules

- Only the owner of a Branch can create Subbranches inside it.
- Only the owner of a Branch can edit or delete its Subbranches.
- A Subbranch slug must be unique inside its parent Branch.

## Color Token Endpoints

These endpoints require a Bearer token:

Authorization: Bearer <token>

Available endpoints:

POST /api/me/subbranches/:subbranchId/tokens
PATCH /api/me/subbranches/:subbranchId/tokens/:tokenId
DELETE /api/me/subbranches/:subbranchId/tokens/:tokenId

### Create Color Token

Creates a new Color Token inside a Subbranch that belongs to an owned Branch.

Endpoint:

POST /api/me/subbranches/:subbranchId/tokens

Example request body:

{
"name": "adech-boulevard-1",
"value": "#C7DCFF",
"usage": "Used for soft backgrounds and calm interface surfaces."
}

### Update Color Token

Updates a Color Token inside a Subbranch that belongs to an owned Branch.

Endpoint:

PATCH /api/me/subbranches/:subbranchId/tokens/:tokenId

Example request body:

{
"usage": "Used for primary calm backgrounds in Boulevard interfaces."
}

### Delete Color Token

Deletes a Color Token inside a Subbranch that belongs to an owned Branch.

Endpoint:

DELETE /api/me/subbranches/:subbranchId/tokens/:tokenId

### Color Token Business Rules

* Only the owner of the parent Branch can create, edit, or delete Color Tokens.
* Color Token values must be valid hexadecimal colors.
* Color Token names must be unique inside the same Subbranch.

## Testing

The backend uses Vitest and Supertest for API tests.

Prepare the test database:

```bash
npm run test:prepare
```

Run the test suite:

```bash
npm test
```

The tests cover:

- User registration.
- User login.
- Current authenticated user.
- Protected Branch creation.
- Branch ownership rules.
- Branch publishing rules.
- Subbranch creation.
- Color Token creation.
- Color Token validation.
- Duplicate Color Token names inside the same Subbranch.

## Public Branch Endpoints

These endpoints do not require authentication.

Available endpoints:

GET /api/branches
GET /api/branches/:slug

### List Public Branches

Returns all public Branches.

Endpoint:

GET /api/branches

Optional search query:

GET /api/branches?search=Superior

### Get Public Branch by Slug

Returns a public Branch by its slug.

Endpoint:

GET /api/branches/:slug

Example:

GET /api/branches/superior

### Public Branch Business Rules

* Visitors can only see Branches where `isPublic` is true.
* Private Branches are not returned by public endpoints.
