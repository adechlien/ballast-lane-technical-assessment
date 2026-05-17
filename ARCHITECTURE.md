# Architecture

## 1. Overview
Adechen is a full-stack web application for creating, managing, and publishing design Branches inspired by the Adech design ecosystem.

The application follows a separated frontend and backend architecture:

```txt
React Client
   ↓
API Client
   ↓
Express Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
Database
```

The main goal of this architecture is to keep responsibilities separated. The frontend is responsible for user interaction and visual feedback, while the backend is responsible for authentication, authorization, validation, business rules, and data persistence.

## 2. Application Layers
Adechen is organized around clear layers.

### Frontend Layer

The frontend renders the user interface and communicates with the backend through API helper functions.

It should not contain database logic or backend business rules.

### API Layer

The API layer exposes HTTP endpoints through Express routes.

Routes are responsible for connecting URLs and HTTP methods to controllers.

### Controller Layer

Controllers receive requests, call the appropriate service, and return HTTP responses.

Controllers should stay little. They should not contain database queries or complex business rules.

### Service Layer

Services contain the main business rules of the application.

Examples:

* Only authenticated users can create Branches.
* Only the owner of a Branch can edit or delete it.
* A Branch cannot be published unless it has at least one Subbranch.
* A Subbranch cannot be considered complete unless it has at least two valid Color Tokens.
* Color Token names must be unique inside the same Subbranch.

### Repository Layer

Repositories handle database access.

They are responsible for creating, reading, updating, and deleting records from the database.

### Database Layer

The database stores users, Branches, Subbranches, and Color Tokens persistently.

## 3. Frontend Architecture
The frontend is built with React and Vite.

The `client/` folder contains the user interface of the application. It is responsible for rendering pages, handling user interactions, showing loading and error states, validating forms on the client side, and communicating with the backend API.

Planned frontend structure:

```txt
client/
  public/
  src/
    components/
    pages/
    services/
    hooks/
    context/
    utils/
    styles/
    App.jsx
    main.jsx
  index.html
  package.json
  vite.config.js
```

### Components

Reusable UI pieces.

Examples:

* Navbar
* BranchCard
* BranchForm
* SubbranchForm
* ColorTokenForm
* ColorTokenList
* LoadingState
* ErrorMessage
* ProtectedRoute

### Pages

Route-level views.

Examples:

* Home
* Public Branches
* Branch Detail
* Login
* Register
* Dashboard
* Branch Editor

### Services

Frontend service files will contain API calls.

Examples:

```txt
authService.js
branchService.js
subbranchService.js
colorTokenService.js
```

These files keep fetch logic separated from React components.

### Hooks

Custom hooks can be used for reusable frontend behavior.

Examples:

* useAuth
* useBranches
* useForm

### Styles

The frontend will use Tailwind CSS and Adech Themes as the visual layer.

The goal is to create a clean, responsive interface connected to the Adech visual identity without overcomplicating the design.

## 4. Backend Architecture
The backend is built with Node.js and Express.

The `server/` folder contains the API, authentication logic, validation, business rules, and database access.

Planned backend structure:

```txt
server/
  src/
    app.js
    server.js
    config/
    controllers/
    db/
    middleware/
    repositories/
    routes/
    services/
    validators/
    utils/
  tests/
  prisma/
    schema.prisma
    seed.js
  package.json
  .env.example
```

### app.js

Configures the Express application:

- Global middleware.
- API routes.
- Error handling middleware.

### server.js

Starts the HTTP server.

Keeping app.js and server.js separated makes testing easier because tests can import the Express app without starting a real server.

### Config

Stores environment configuration.

Examples:

- API port.
- JWT secret.
- Database URL.

### Routes

Routes define API endpoints and connect them to controllers.

Examples:

- auth.routes.js
- branch.routes.js
- subbranch.routes.js
- colorToken.routes.js

### Controllers

Controllers handle request and response flow.

They should:

- Read request parameters and body.
- Call services.
- Return JSON responses and HTTP status codes.

Controllers should not contain database queries or complex business logic.

### Services

Services contain business rules.

Examples:

- Only the owner of a Branch can edit or delete it.
- A Branch cannot be published unless it has at least one Subbranch.
- A Subbranch cannot be considered complete unless it has at least two valid Color Tokens.
- Color Token names must be unique inside the same Subbranch.

### Repositories

Repositories contain database access logic.

They are responsible for creating, reading, updating, and deleting records using the database client.

### Middleware

Middleware handles shared request logic.

Examples:

- Authentication middleware.
- Error handling middleware.
- Request validation middleware.

### Validators

Validators define input validation rules.

Examples:

- Valid email.
- Minimum password length.
- Required Branch name.
- Valid hexadecimal color value.

## 5. Data Model
Adechen uses a relational data model stored in SQLite.

SQLite was chosen because this assessment focuses on building a small but complete full-stack application. It provides persistent storage while keeping the local setup simple, reliable, and easy to run without requiring an external database server.

Conceptual model:

```txt
User
 └── Branch
      └── Subbranch
           └── Color Token
```

### User

Represents an authenticated account.

Fields:

```txt
id
name
email
passwordHash
createdAt
updatedAt
```

### Branch

Represents a visual direction inside the Adech design ecosystem.

Fields:

```txt
id
name
slug
description
mood
isPublic
ownerId
createdAt
updatedAt
```

Relationships:

```txt
A User has many Branches.
A Branch belongs to one User.
A Branch has many Subbranches.
```

### Subbranch

Represents a palette inside a Branch.

Fields:

```txt
id
name
slug
description
branchId
createdAt
updatedAt
```

Relationships:

```txt
A Subbranch belongs to one Branch.
A Subbranch has many Color Tokens.
```

### Color Token

Represents a named color value inside a Subbranch.

Fields:

```txt
id
name
value
usage
subbranchId
createdAt
updatedAt
```

Relationships:

```txt
A Color Token belongs to one Subbranch.
```

## 6. Authentication and Authorization
Adechen includes user registration and login.

Authentication answers:

```txt
Who is the user?
```

Authorization answers:

```txt
Is this user allowed to perform this action?
```

Protected actions:

* Creating Branches.
* Editing Branches.
* Deleting Branches.
* Publishing and unpublishing Branches.
* Creating, editing, and deleting Subbranches inside owned Branches.
* Creating, editing, and deleting Color Tokens inside owned Subbranches.

Public actions:

* Viewing public Branches.
* Searching public Branches.
* Viewing public Branch details.

Main authorization rule:

```txt
A user can only modify Branches they own.
```

Because Subbranches and Color Tokens belong to a Branch, ownership is checked through the parent Branch.

## 7. API Design
The backend exposes REST API endpoints.

### Auth

```txt
POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
POST /api/auth/logout
```

### Public Branches

```txt
GET /api/branches
GET /api/branches/:slug
```

### Authenticated Branches

```txt
GET /api/me/branches
POST /api/me/branches
PATCH /api/me/branches/:id
DELETE /api/me/branches/:id
PATCH /api/me/branches/:id/publish
PATCH /api/me/branches/:id/unpublish
```

### Subbranches

```txt
POST /api/me/branches/:branchId/subbranches
PATCH /api/me/branches/:branchId/subbranches/:subbranchId
DELETE /api/me/branches/:branchId/subbranches/:subbranchId
```

### Color Tokens

```txt
POST /api/me/subbranches/:subbranchId/tokens
PATCH /api/me/subbranches/:subbranchId/tokens/:tokenId
DELETE /api/me/subbranches/:subbranchId/tokens/:tokenId
```

The `/api/me` prefix is used for authenticated operations that depend on the current user.

## 8. Validation and Error Handling
The API should return clear HTTP status codes and useful error messages.

Examples:

```txt
400 Bad Request - Invalid input
401 Unauthorized - Missing or invalid authentication
403 Forbidden - User does not own the resource
404 Not Found - Resource was not found
409 Conflict - Email, slug, or token name already exists
500 Internal Server Error - Unexpected server error
````

Validation examples:

* Email must be valid.
* Password must meet the minimum length.
* Branch name is required.
* Branch slug must be unique globally.
* Subbranch name is required.
* Color Token name is required.
* Color Token value must be a valid hexadecimal color.
* Color Token name must be unique inside the same Subbranch.

Validation should happen in the backend even if the frontend also provides client-side validation.

## 9. Testing Strategy
The project will include meaningful tests for core behavior.

The backend will be the first testing priority because authentication, authorization, validation, and business rules live there.

Initial test cases:

1. Register creates a new user.
2. Login authenticates an existing user.
3. Public Branches can be listed without authentication.
4. Creating a Branch requires authentication.
5. A user cannot edit another user's Branch.
6. A Branch cannot be published without at least one Subbranch.
7. A Subbranch cannot be considered complete with fewer than two valid Color Tokens.
8. Invalid Color Token hex values are rejected.
9. Duplicate Color Token names inside the same Subbranch are rejected.

The README will include the command needed to run the tests.

SQLite makes the testing setup simpler because tests can use a local or temporary database without requiring an external database server.

## 10. Design System
Adechen uses Tailwind CSS for utility-first styling and Adech Themes as the visual token layer.

Adech Themes will help keep color decisions centralized and consistent across the interface.

The visual direction should be:

- Clean.
- Responsive.
- Minimal.
- Professional.
- Connected to the Adech ecosystem.

The interface should support the main product goal: helping users create, organize, and publish Branches, Subbranches, and Color Tokens.

The design should avoid unnecessary complexity so the application remains easy to use and easy to explain during the technical review.

## 11. Future Improvements
- Export Branches as CSS Variables or Tailwind config.
- Add Favorites.
- Add Comments.
