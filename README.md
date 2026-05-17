# Adechen
Adechen is a full-stack web application for creating, managing, and publishing design Branches inspired by the Adech design ecosystem.

The project is based on the structure used in Adech Themes, where a Branch represents a visual direction, each Branch contains Subbranches, and each Subbranch contains reusable Color Tokens.

## Backend Setup
The backend uses Node.js, Express, Prisma, and SQLite.

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
