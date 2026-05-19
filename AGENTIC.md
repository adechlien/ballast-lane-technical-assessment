## 1. Tools Used
### ChatGPT
As my only agent, I used it to generate structures and code I already understand, mainly focused in frontend code or mockups to be changed later.

In this case, as being a full-stack web application to be developed in no more than 3 days. I had to ask the AI for help with the structures and ideas of how to implement some aspects.

## 2. My Approach
### First Steps
As a starting plan, I knew I wanted to develop something related to my projects, so I thought of making a Reading/Writing Catalog (for my blog) or a Color Token Manager (for Adech themes), so I asked ChatGPT which idea sounded better for implementing a full-stack web application in no more than 3 days.

As a result, ChatGPT suggested the Color Token Manager idea, which I agreed with. The reading catalog looked like a simple CMS, and I already used one in there, so I decided to go with the Color Token Manager, which I decided to call Adechen (Adech + Token).

### Process
I started asking for help in explaining how to write a good User Story file. I already knew about them, but never wrote one before, so I asked ChatGPT to help me in the structure. The same for the ARCHITECTURE.md and Conventional committing. I used to write simple messages like "fixed vercel adapter version", without the type.

### The dark side of the moon
I started developing the backend first, using Node.js and Express with Prisma for the database. Since backend is not my strongest area, I needed ChatGPT to help me with the implementation. So I started by implementing the server functionality with Express and Prisma. Asking the why of the things I was not sure about, and ChatGPT helped me understand the best approach.

### The rainbow after the rain
After Database and Backend, I went to the frontend. Using React Tailwind, Adech Themes, and Tabler Icons, I implemented the Interface. I needed to do this quickly, because I was running out of time. I asked ChatGPT for giving components style-inspired by the Adech Themes Landing Page. After receiving the code, I changed things and gave details to make it mine.

## 3. Key Prompts

### Prompt 1: Choosing the project idea

> “Para decidir si va a ser el Design Token Collection Manager o el Reading/Writing Catalog, haz una imagen de la interfaz de cada uno a ver cómo luciría y con qué contaría.”

I'm a visual person, so, it gets easier for me to understand something if it is presented visually. The interfaces helped me understand that the Design Token Collection Manager was a better fit for the full-stack assessment.

### Prompt 2: Defining the main entity

> “Antes de pasar al ARCHITECTURE.md, verifiquemos el punto 5. Main Entity. Definamos bien cuál va a ser conociendo cómo manejo Adech Themes.”

In the beginning, I was not sure which entity to use as the main one. I was recommended to use an easier domain like Subbranch, but I had to settle for Branch after realizing how Adech Themes works.

## 4. Critical Evaluation
ChatGPT generated the `schema.prisma` file according to the idea I gave it. At the beginning, I was using Prisma 7, but I had to get back to Prisma 6 due to a problem with the SQLite Adapter in the line:

```prisma
url = env("DATABASE_URL")
```

With this, ChatGPT helped me a lot creating the `schema.prisma` file quickly and making me understand that I was not able to use Prisma 7.

## 5. What I learned
The importance of planning. Starting by doing the User Story, Architecture and Conventional Committing, I was able to get a good structure for the project and implement it efficiently and fast.
