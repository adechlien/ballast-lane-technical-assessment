export function validateCreateBranchInput({ name, description, mood }) {
  const errors = {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Branch name must be at least 2 characters long.";
  }

  if (description !== undefined && typeof description !== "string") {
    errors.description = "Description must be a string.";
  }

  if (mood !== undefined && typeof mood !== "string") {
    errors.mood = "Mood must be a string.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateUpdateBranchInput({ name, description, mood }) {
  const errors = {};

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Branch name must be at least 2 characters long.";
    }
  }

  if (description !== undefined && typeof description !== "string") {
    errors.description = "Description must be a string.";
  }

  if (mood !== undefined && typeof mood !== "string") {
    errors.mood = "Mood must be a string.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
