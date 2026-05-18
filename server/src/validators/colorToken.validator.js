const HEX_COLOR_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export function validateCreateColorTokenInput({ name, value, usage }) {
  const errors = {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Color Token name must be at least 2 characters long.";
  }

  if (!value || typeof value !== "string") {
    errors.value = "Color Token value is required.";
  } else if (!HEX_COLOR_REGEX.test(value.trim())) {
    errors.value = "Color Token value must be a valid hexadecimal color.";
  }

  if (usage !== undefined && typeof usage !== "string") {
    errors.usage = "Usage must be a string.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateUpdateColorTokenInput({ name, value, usage }) {
  const errors = {};

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Color Token name must be at least 2 characters long.";
    }
  }

  if (value !== undefined) {
    if (typeof value !== "string" || !HEX_COLOR_REGEX.test(value.trim())) {
      errors.value = "Color Token value must be a valid hexadecimal color.";
    }
  }

  if (usage !== undefined && typeof usage !== "string") {
    errors.usage = "Usage must be a string.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
