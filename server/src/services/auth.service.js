import { createUser, findUserByEmail, findUserById } from "../repositories/user.repository.js";
import { hashPassword, comparePasswords } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

function sanitizeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

export async function registerUser({ name, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = await findUserByEmail(normalizedEmail);

  if (existingUser) {
    const error = new Error("Email is already registered.");
    error.statusCode = 409;
    throw error;
  }

  const passwordHash = await hashPassword(password);

  const user = await createUser({
    name: name.trim(),
    email: normalizedEmail,
    passwordHash,
  });

  const token = generateToken({
    userId: user.id,
  });

  return {
    user: sanitizeUser(user),
    token,
  };
}

export async function loginUser({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();

  const user = await findUserByEmail(normalizedEmail);

  if (!user) {
    const error = new Error("Invalid email or password.");
    error.statusCode = 401;
    throw error;
  }

  const passwordMatches = await comparePasswords(password, user.passwordHash);

  if (!passwordMatches) {
    const error = new Error("Invalid email or password.");
    error.statusCode = 401;
    throw error;
  }

  const token = generateToken({
    userId: user.id,
  });

  return {
    user: sanitizeUser(user),
    token,
  };
}

export async function getCurrentUser(userId) {
  const user = await findUserById(userId);

  if (!user) {
    const error = new Error("User not found.");
    error.statusCode = 404;
    throw error;
  }

  return {
    user: sanitizeUser(user),
  };
}
