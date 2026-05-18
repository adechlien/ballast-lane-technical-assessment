import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app.js";

function uniqueEmail(prefix = "user") {
  return `${prefix}-${crypto.randomUUID()}@example.com`;
}

async function registerAndGetToken(email = uniqueEmail("alejandro")) {
const response = await request(app)
.post("/api/auth/register")
.send({
name: "Alejandro",
email,
password: "password123",
});

expect(response.status).toBe(201);

return response.body.token;
}

describe("Branch endpoints", () => {
  it("rejects Branch creation without authentication", async () => {
    const response = await request(app)
      .post("/api/me/branches")
      .send({
        name: "Superior",
        description: "Main theme in Adech Themes.",
        mood: "Cold, calm, introspective",
      });

    expect(response.status).toBe(401);
  });

  it("creates a Branch for an authenticated user", async () => {
    const token = await registerAndGetToken();

    const response = await request(app)
      .post("/api/me/branches")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Superior",
        description: "Main theme in Adech Themes.",
        mood: "Cold, calm, introspective",
      });

    expect(response.status).toBe(201);
    expect(response.body.branch.name).toBe("Superior");
    expect(response.body.branch.slug).toBe("superior");
    expect(response.body.branch.isPublic).toBe(false);
  });

  it("does not publish a Branch without Subbranches", async () => {
    const token = await registerAndGetToken();

    const createResponse = await request(app)
      .post("/api/me/branches")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Superior",
        description: "Main theme in Adech Themes.",
        mood: "Cold, calm, introspective",
      });

    const branchId = createResponse.body.branch.id;

    const publishResponse = await request(app)
      .patch(`/api/me/branches/${branchId}/publish`)
      .set("Authorization", `Bearer ${token}`);

    expect(publishResponse.status).toBe(400);
    expect(publishResponse.body.message).toBe(
      "A Branch cannot be published without at least one Subbranch."
    );
  });

  it("prevents a user from editing another user's Branch", async () => {
    const firstUserToken = await registerAndGetToken("first@example.com");
    const secondUserToken = await registerAndGetToken("second@example.com");

    const createResponse = await request(app)
      .post("/api/me/branches")
      .set("Authorization", `Bearer ${firstUserToken}`)
      .send({
        name: "Superior",
        description: "Main theme in Adech Themes.",
        mood: "Cold, calm, introspective",
      });

    const branchId = createResponse.body.branch.id;

    const updateResponse = await request(app)
      .patch(`/api/me/branches/${branchId}`)
      .set("Authorization", `Bearer ${secondUserToken}`)
      .send({
        description: "Trying to edit another user's Branch.",
      });

    expect(updateResponse.status).toBe(403);
  });
});
