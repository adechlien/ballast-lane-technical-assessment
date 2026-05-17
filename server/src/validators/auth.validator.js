export function validateRegisterInput({ name, email, password }) {
  const errors = {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  }

  if (!email || typeof email !== "string") {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email must be valid.";
  }

  if (!password || typeof password !== "string") {
    errors.password = "Password is required.";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateLoginInput({ email, password }) {
  const errors = {};

  if (!email || typeof email !== "string") {
    errors.email = "Email is required.";
  }

  if (!password || typeof password !== "string") {
    errors.password = "Password is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
