# Adechen

Adechen is a full-stack web application for creating, managing, and publishing design Branches inspired by the Adech design ecosystem.

The project is based on the structure used in Adech Themes, where a Branch represents a visual direction, each Branch contains Subbranches, and each Subbranch contains reusable Color Tokens.

## Project Overview

Adechen's goal was to create a complete full-stack application with authentication, persistent data storage, protected CRUD operations, public browsing, testing, and documentation.

The main domain model follows this structure:

```txt
Branch
└── Subbranch
    └── Color Token
```

A Branch represents a complete visual direction.  
A Subbranch represents a palette inside that Branch.  
A Color Token represents a reusable hexadecimal color value.

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- Adech Themes Superior
- Tabler Icons

### Backend

- Node.js
- Express
- Prisma 6
- SQLite
- JWT authentication
- bcrypt password hashing

### Testing

- Vitest
- Supertest

### Development Tooling

- Concurrently
- Root-level npm scripts
- Automated local environment setup

## Quick Start

From the root, install all dependencies:

```bash
npm run install:all
```

Then run the full application:

```bash
npm run abracadabra
```

This command will:

- Create `server/.env` and `client/.env` if they do not exist.
- Prepare the test database.
- Run the backend test suite.
- Generate the Prisma Client.
- Apply database migrations.
- Start the Express backend.
- Start the Vite frontend.

If the tests fail, the application will not start.

The backend will run at:

```txt
http://localhost:3000
```

The frontend will run at:

```txt
http://localhost:5173
```

### Health Check

```txt
GET /health
```

Example response:

```json
{
  "status": "ok",
  "service": "adechen-api"
}
```

## Running the Full Application Manually

If you do not want to use `npm run abracadabra`, open two terminals.

Terminal 1:

```bash
cd server
npm run dev
```

Terminal 2:

```bash
cd client
npm run dev
```

Then open:

```txt
http://localhost:5173
```

## Testing

The backend uses Vitest and Supertest for API tests.

You can run tests from the root:

```bash
npm test
```

Or from the server folder:

```bash
cd server
npm run test:prepare
npm test
```

The `npm run abracadabra` command also runs the backend test suite before starting the application.

The tests cover:

- User registration.
- Duplicate email validation.
- User login.
- Current authenticated user.
- Protected Branch creation.
- Branch ownership rules.
- Branch publishing rules.
- Public Branch listing.
- Public Branch detail by slug.
- Private Branch visibility rules.
- Subbranch creation.
- Color Token creation.
- Color Token validation.
- Duplicate Color Token names inside the same Subbranch.

## Focus Areas

This project focuses mainly on Backend Focus and Frontend Focus.

Backend Focus is covered through authentication, protected routes, input validation, ownership rules, public/private resource access, business rules, filtering, environment variables, and a health check endpoint.

Frontend Focus is covered through a component-based React architecture, authentication modal, protected dashboard, loading and error states, custom confirmation modal, responsive layouts, and Adech Themes Superior styling.

## Additional Documentation

- `USER_STORY.md` explains the product idea, main user story, entities, scope and business rules.
- `ARCHITECTURE.md` explains the technical architecture and separation of responsibilities.
- `AGENTIC.md` documents the use of AI during the development process.
