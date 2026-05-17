# User Story

## 1. Main User Story
As a designer-developer, I want to create and manage design Branches focused on color tokens, so that I can organize reusable visual systems and share selected Branches publicly.

## 2. Product Context
This project is inspired by my experience building Adech Themes. Instead of creating another landing page, Adechen focuses on the management workflow behind design systems: creating, editing, organizing, and publishing Branches, Subbranches, and Color Tokens.

## 3. User Types
- Unauthenticated Visitor
- Authenticated User

## 4. Core User Flows
A visitor:
- Can view public Branches and their public Subbranches.
- Can register an account.
- Can log in.

An authenticated user:
- Can create, edit, and delete Branches.
- Can create, edit, and delete Subbranches inside their own Branches.
- Can create, edit, and delete Color Tokens inside their own Subbranches.
- Can view their own Branches.
- Can view public Branches.
- Can publish and unpublish their own Branches.
- Can log out.

## 5. Main Entity
The main entity is a Branch, representing a visual direction inside the Adech design ecosystem. Each Branch has its own identity, mood, and design intention.

A Branch is made of Subbranches, also understood as palettes. Each Subbranch groups related Color Tokens with its own visual character, while still belonging to the same parent Branch.

This structure is inspired by Adech Themes, where a Branch such as Superior contains Subbranches like Boulevard, Venomous, Swamp, Sunny, or Void. Each Subbranch has a name, description, and a group of Color Tokens.

Adechen should preserve this design logic: Subbranches belong to a single Branch, and users should not mix Subbranches from different Branches inside the same visual system.

### Branch

Each Branch includes:

- Name
- Slug
- Description
- Mood or visual intention
- Visibility status
- Owner
- Associated Subbranches
- Creation date
- Update date

### Subbranch

A Subbranch represents a palette inside a Branch.

Each Subbranch includes:

- Name
- Slug
- Description
- Parent Branch
- Associated Color Tokens
- Creation date
- Update date

### Color Token

A Color Token belongs to a Subbranch. Each Color Token represents a named color value that can be reused in an interface. Each Color Token includes:

- Name
- Hexadecimal color value
- Optional usage description

### Structure Example:

```txt
Branch: Superior
  Subbranch: Boulevard
    adech-boulevard-1: #C7DCFF
    adech-boulevard-2: #B4D0FF
    adech-boulevard-3: #A1C4FF

  Subbranch: Venomous
    adech-venomous-1: #B0D8BE
    adech-venomous-2: #D9EEDB

  Subbranch: Swamp
    adech-swamp-1: #1E2646
```

## 6. Business Rules
- Only authenticated users can create Branches.
- Only the owner of a Branch can edit or delete it.
- Only the owner of a Branch can create, edit, or delete its Subbranches.
- Only the owner of a Subbranch can create, edit, or delete its Color Tokens.
- Only the owner of a Branch can publish or unpublish it.
- Visitors can only see public Branches and their public Subbranches.
- A Branch cannot be published unless it has at least one Subbranch.
- A Subbranch cannot be considered complete unless it has at least two valid Color Tokens.
- Color Token values must be valid hexadecimal colors.
- Color Token names must be unique inside the same Subbranch.
- Subbranches belong to one Branch and cannot be mixed across different Branches.

## 7. MVP Scope
- User authentication (registration, login, logout).
- Branch management (create, edit, delete, publish and unpublish).
- Subbranch management (create, edit, delete, Color Token management).
- Color Token management (create, edit, delete).
- Public Branch browsing (view, search).

## 8. Out of Scope
- Typography tokens.
- Spacing tokens.
- Team collaboration.
- OAuth login.
- Password recovery.
- Export to Tailwind config.
- Advanced analytics.
- Comments in Branches/Subbranches.
