import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const files = [
  {
    path: "server/.env",
    content: `PORT=3000
DATABASE_URL="file:./dev.db"
JWT_SECRET="adechen-dev-secret-change-before-production"
`,
  },
  {
    path: "client/.env",
    content: `VITE_API_URL=http://localhost:3000
`,
  },
];

for (const file of files) {
  const absolutePath = resolve(file.path);

  if (existsSync(absolutePath)) {
    console.log(`Skipped ${file.path} because it already exists.`);
    continue;
  }

  mkdirSync(dirname(absolutePath), { recursive: true });
  writeFileSync(absolutePath, file.content, "utf8");

  console.log(`Created ${file.path}`);
}

console.log("Environment files are ready.");
