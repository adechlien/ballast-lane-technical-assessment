import {
  createMyBranch,
  deleteMyBranch,
  getMyBranches,
  getPublicBranchBySlug,
  getPublicBranches,
  publishMyBranch,
  unpublishMyBranch,
  updateMyBranch,
} from "../services/branch.service.js";
import {
  validateCreateBranchInput,
  validateUpdateBranchInput,
} from "../validators/branch.validator.js";

export async function listMyBranches(req, res, next) {
  try {
    const branches = await getMyBranches(req.user.id);

    return res.status(200).json({
      branches,
    });
  } catch (error) {
    next(error);
  }
}

export async function createBranch(req, res, next) {
  try {
    const validation = validateCreateBranchInput(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        message: "Invalid Branch input.",
        errors: validation.errors,
      });
    }

    const branch = await createMyBranch(req.user.id, req.body);

    return res.status(201).json({
      branch,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateBranch(req, res, next) {
  try {
    const validation = validateUpdateBranchInput(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        message: "Invalid Branch input.",
        errors: validation.errors,
      });
    }

    const branch = await updateMyBranch(req.user.id, req.params.id, req.body);

    return res.status(200).json({
      branch,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeBranch(req, res, next) {
  try {
    const result = await deleteMyBranch(req.user.id, req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function publishBranch(req, res, next) {
  try {
    const branch = await publishMyBranch(req.user.id, req.params.id);

    return res.status(200).json({
      branch,
    });
  } catch (error) {
    next(error);
  }
}

export async function unpublishBranch(req, res, next) {
  try {
    const branch = await unpublishMyBranch(req.user.id, req.params.id);

    return res.status(200).json({
      branch,
    });
  } catch (error) {
    next(error);
  }
}

export async function listPublicBranches(req, res, next) {
  try {
    const branches = await getPublicBranches({
      search: req.query.search,
    });

    return res.status(200).json({
      branches,
    });
  } catch (error) {
    next(error);
  }
}

export async function getPublicBranch(req, res, next) {
  try {
    const branch = await getPublicBranchBySlug(req.params.slug);

    return res.status(200).json({
      branch,
    });
  } catch (error) {
    next(error);
  }
}
