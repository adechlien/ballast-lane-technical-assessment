import {
  createMyColorToken,
  deleteMyColorToken,
  updateMyColorToken,
} from "../services/colorToken.service.js";
import {
  validateCreateColorTokenInput,
  validateUpdateColorTokenInput,
} from "../validators/colorToken.validator.js";

export async function createColorToken(req, res, next) {
  try {
    const validation = validateCreateColorTokenInput(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        message: "Invalid Color Token input.",
        errors: validation.errors,
      });
    }

    const colorToken = await createMyColorToken(
      req.user.id,
      req.params.subbranchId,
      req.body
    );

    return res.status(201).json({
      colorToken,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateColorToken(req, res, next) {
  try {
    const validation = validateUpdateColorTokenInput(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        message: "Invalid Color Token input.",
        errors: validation.errors,
      });
    }

    const colorToken = await updateMyColorToken(
      req.user.id,
      req.params.subbranchId,
      req.params.tokenId,
      req.body
    );

    return res.status(200).json({
      colorToken,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeColorToken(req, res, next) {
  try {
    const result = await deleteMyColorToken(
      req.user.id,
      req.params.subbranchId,
      req.params.tokenId
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
