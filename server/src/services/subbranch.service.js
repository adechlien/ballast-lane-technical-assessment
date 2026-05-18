import { findBranchById } from "../repositories/branch.repository.js";
import {
  createSubbranch,
  deleteSubbranch,
  findSubbranchByBranchIdAndSlug,
  findSubbranchById,
  updateSubbranch,
} from "../repositories/subbranch.repository.js";
import { slugify } from "../utils/slugify.js";

function ensureBranchExists(branch) {
  if (!branch) {
    const error = new Error("Branch not found.");
    error.statusCode = 404;
    throw error;
  }
}

function ensureBranchOwner(branch, userId) {
  if (branch.ownerId !== userId) {
    const error = new Error("You are not allowed to modify this Branch.");
    error.statusCode = 403;
    throw error;
  }
}

function ensureSubbranchExists(subbranch) {
  if (!subbranch) {
    const error = new Error("Subbranch not found.");
    error.statusCode = 404;
    throw error;
  }
}

function ensureSubbranchBelongsToBranch(subbranch, branchId) {
  if (subbranch.branchId !== branchId) {
    const error = new Error("Subbranch does not belong to this Branch.");
    error.statusCode = 404;
    throw error;
  }
}

async function ensureUniqueSubbranchSlug(branchId, slug, currentSubbranchId = null) {
  const existingSubbranch = await findSubbranchByBranchIdAndSlug(branchId, slug);

  if (existingSubbranch && existingSubbranch.id !== currentSubbranchId) {
    const error = new Error("Subbranch slug already exists inside this Branch.");
    error.statusCode = 409;
    throw error;
  }
}

export async function createMySubbranch(userId, branchId, { name, description }) {
  const branch = await findBranchById(branchId);

  ensureBranchExists(branch);
  ensureBranchOwner(branch, userId);

  const slug = slugify(name);

  if (!slug) {
    const error = new Error("Subbranch name must generate a valid slug.");
    error.statusCode = 400;
    throw error;
  }

  await ensureUniqueSubbranchSlug(branchId, slug);

  return createSubbranch({
    name: name.trim(),
    slug,
    description: description?.trim() || null,
    branchId,
  });
}

export async function updateMySubbranch(
  userId,
  branchId,
  subbranchId,
  data
) {
  const branch = await findBranchById(branchId);

  ensureBranchExists(branch);
  ensureBranchOwner(branch, userId);

  const subbranch = await findSubbranchById(subbranchId);

  ensureSubbranchExists(subbranch);
  ensureSubbranchBelongsToBranch(subbranch, branchId);

  const updateData = {};

  if (data.name !== undefined) {
    const slug = slugify(data.name);

    if (!slug) {
      const error = new Error("Subbranch name must generate a valid slug.");
      error.statusCode = 400;
      throw error;
    }

    await ensureUniqueSubbranchSlug(branchId, slug, subbranchId);

    updateData.name = data.name.trim();
    updateData.slug = slug;
  }

  if (data.description !== undefined) {
    updateData.description = data.description.trim() || null;
  }

  return updateSubbranch(subbranchId, updateData);
}

export async function deleteMySubbranch(userId, branchId, subbranchId) {
  const branch = await findBranchById(branchId);

  ensureBranchExists(branch);
  ensureBranchOwner(branch, userId);

  const subbranch = await findSubbranchById(subbranchId);

  ensureSubbranchExists(subbranch);
  ensureSubbranchBelongsToBranch(subbranch, branchId);

  await deleteSubbranch(subbranchId);

  return {
    message: "Subbranch deleted successfully.",
  };
}
