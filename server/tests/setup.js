import { beforeEach, afterAll } from "vitest";
import { prisma } from "../src/db/prisma.js";

beforeEach(async () => {
  await prisma.colorToken.deleteMany();
  await prisma.subbranch.deleteMany();
  await prisma.branch.deleteMany();
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
