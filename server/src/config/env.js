import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};

if (!env.jwtSecret) {
  throw new Error("JWT_SECRET is required.");
}

if (!env.databaseUrl) {
  throw new Error("DATABASE_URL is required.");
}
