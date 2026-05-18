import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app.js";
import { prisma } from "../src/db/prisma.js";

describe("Auth endpoints", () => {
  it("registers a new user and returns a token", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Alejandro",
        email: "alejandro@example.com",
        password: "password123",
      });

    expect(response.status).toBe(201);
    expect(response.body.user.email).toBe("alejandro@example.com");
    expect(response.body.token).toBeTruthy();
    expect(response.body.user.passwordHash).toBeUndefined();

    const user = await prisma.user.findUnique({
      where: { email: "alejandro@example.com" },
    });

    expect(user).toBeTruthy();
    expect(user.passwordHash).not.toBe("password123");
  });

  it("rejects duplicate emails", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Alejandro",
        email: "alejandro@example.com",
        password: "password123",
      });

    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Alejandro",
        email: "alejandro@example.com",
        password: "password123",
      });

    expect(response.status).toBe(409);
    expect(response.body.message).toBe("Email is already registered.");
  });

  it("logs in an existing user", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Alejandro",
        email: "alejandro@example.com",
        password: "password123",
      });

    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "alejandro@example.com",
        password: "password123",
      });

    expect(response.status).toBe(200);
    expect(response.body.user.email).toBe("alejandro@example.com");
    expect(response.body.token).toBeTruthy();
  });

  it("returns the current user with a valid token", async () => {
    const registerResponse = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Alejandro",
        email: "alejandro@example.com",
        password: "password123",
      });

    const response = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${registerResponse.body.token}`);

    expect(response.status).toBe(200);
    expect(response.body.user.email).toBe("alejandro@example.com");
  });
});
