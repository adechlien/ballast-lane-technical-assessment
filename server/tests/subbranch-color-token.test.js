import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app.js";

async function createUserBranchAndSubbranch() {
  const registerResponse = await request(app)
    .post("/api/auth/register")
    .send({
      name: "Alejandro",
      email: "alejandro@example.com",
      password: "password123",
    });

  const token = registerResponse.body.token;

  const branchResponse = await request(app)
    .post("/api/me/branches")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Superior",
      description: "Main theme in Adech Themes.",
      mood: "Cold, calm, introspective",
    });

  const branchId = branchResponse.body.branch.id;

  const subbranchResponse = await request(app)
    .post(`/api/me/branches/${branchId}/subbranches`)
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Boulevard",
      description:
        "The city, distance, and the quiet loneliness that can exist even in a crowded world.",
    });

  return {
    token,
    branchId,
    subbranchId: subbranchResponse.body.subbranch.id,
  };
}

describe("Subbranch and Color Token endpoints", () => {
  it("creates a Subbranch inside an owned Branch", async () => {
    const registerResponse = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Alejandro",
        email: "alejandro@example.com",
        password: "password123",
      });

    const token = registerResponse.body.token;

    const branchResponse = await request(app)
      .post("/api/me/branches")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Superior",
        description: "Main theme in Adech Themes.",
        mood: "Cold, calm, introspective",
      });

    const response = await request(app)
      .post(`/api/me/branches/${branchResponse.body.branch.id}/subbranches`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Boulevard",
        description:
          "The city, distance, and the quiet loneliness that can exist even in a crowded world.",
      });

    expect(response.status).toBe(201);
    expect(response.body.subbranch.name).toBe("Boulevard");
    expect(response.body.subbranch.slug).toBe("boulevard");
  });

  it("creates a Color Token inside an owned Subbranch", async () => {
    const { token, subbranchId } = await createUserBranchAndSubbranch();

    const response = await request(app)
      .post(`/api/me/subbranches/${subbranchId}/tokens`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "adech-boulevard-1",
        value: "#C7DCFF",
        usage: "Used for soft backgrounds and calm interface surfaces.",
      });

    expect(response.status).toBe(201);
    expect(response.body.colorToken.name).toBe("adech-boulevard-1");
    expect(response.body.colorToken.value).toBe("#C7DCFF");
  });

  it("rejects invalid hexadecimal Color Token values", async () => {
    const { token, subbranchId } = await createUserBranchAndSubbranch();

    const response = await request(app)
      .post(`/api/me/subbranches/${subbranchId}/tokens`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "invalid-color",
        value: "blue",
      });

    expect(response.status).toBe(400);
    expect(response.body.errors.value).toBe(
      "Color Token value must be a valid hexadecimal color."
    );
  });

  it("rejects duplicate Color Token names inside the same Subbranch", async () => {
    const { token, subbranchId } = await createUserBranchAndSubbranch();

    await request(app)
      .post(`/api/me/subbranches/${subbranchId}/tokens`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "adech-boulevard-1",
        value: "#C7DCFF",
      });

    const response = await request(app)
      .post(`/api/me/subbranches/${subbranchId}/tokens`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "adech-boulevard-1",
        value: "#FFFFFF",
      });

    expect(response.status).toBe(409);
    expect(response.body.message).toBe(
      "Color Token name already exists inside this Subbranch."
    );
  });
});
