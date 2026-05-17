import { getCurrentUser, loginUser, registerUser } from "../services/auth.service.js";
import { validateLoginInput, validateRegisterInput } from "../validators/auth.validator.js";

export async function register(req, res, next) {
  try {
    const validation = validateRegisterInput(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        message: "Invalid register input.",
        errors: validation.errors,
      });
    }

    const result = await registerUser(req.body);

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const validation = validateLoginInput(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        message: "Invalid login input.",
        errors: validation.errors,
      });
    }

    const result = await loginUser(req.body);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function me(req, res, next) {
  try {
    const result = await getCurrentUser(req.user.id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
