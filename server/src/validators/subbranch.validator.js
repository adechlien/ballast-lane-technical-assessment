export function validateCreateSubbranchInput({ name, description }) {
  const errors = {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Subbranch name must be at least 2 characters long.";
  }

  if (description !== undefined && typeof description !== "string") {
    errors.description = "Description must be a string.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateUpdateSubbranchInput({ name, description }) {
  const errors = {};

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Subbranch name must be at least 2 characters long.";
    }
  }

  if (description !== undefined && typeof description !== "string") {
    errors.description = "Description must be a string.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
