import {
  createMySubbranch,
  deleteMySubbranch,
  updateMySubbranch,
} from "../services/subbranch.service.js";
import {
  validateCreateSubbranchInput,
  validateUpdateSubbranchInput,
} from "../validators/subbranch.validator.js";

export async function createSubbranch(req, res, next) {
  try {
    const validation = validateCreateSubbranchInput(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        message: "Invalid Subbranch input.",
        errors: validation.errors,
      });
    }

    const subbranch = await createMySubbranch(
      req.user.id,
      req.params.branchId,
      req.body
    );

    return res.status(201).json({
      subbranch,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateSubbranch(req, res, next) {
  try {
    const validation = validateUpdateSubbranchInput(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        message: "Invalid Subbranch input.",
        errors: validation.errors,
      });
    }

    const subbranch = await updateMySubbranch(
      req.user.id,
      req.params.branchId,
      req.params.subbranchId,
      req.body
    );

    return res.status(200).json({
      subbranch,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeSubbranch(req, res, next) {
  try {
    const result = await deleteMySubbranch(
      req.user.id,
      req.params.branchId,
      req.params.subbranchId
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
