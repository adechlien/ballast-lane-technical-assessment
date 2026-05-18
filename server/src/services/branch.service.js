import {
  createBranch,
  deleteBranch,
  findBranchById,
  findBranchesByOwnerId,
  findBranchBySlug,
  updateBranch,
} from "../repositories/branch.repository.js";
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

async function ensureUniqueSlug(slug, currentBranchId = null) {
  const existingBranch = await findBranchBySlug(slug);

  if (existingBranch && existingBranch.id !== currentBranchId) {
    const error = new Error("Branch slug already exists.");
    error.statusCode = 409;
    throw error;
  }
}

export async function getMyBranches(userId) {
  return findBranchesByOwnerId(userId);
}

export async function createMyBranch(userId, { name, description, mood }) {
  const slug = slugify(name);

  if (!slug) {
    const error = new Error("Branch name must generate a valid slug.");
    error.statusCode = 400;
    throw error;
  }

  await ensureUniqueSlug(slug);

  return createBranch({
    name: name.trim(),
    slug,
    description: description?.trim() || null,
    mood: mood?.trim() || null,
    ownerId: userId,
  });
}

export async function updateMyBranch(userId, branchId, data) {
  const branch = await findBranchById(branchId);

  ensureBranchExists(branch);
  ensureBranchOwner(branch, userId);

  const updateData = {};

  if (data.name !== undefined) {
    const slug = slugify(data.name);

    if (!slug) {
      const error = new Error("Branch name must generate a valid slug.");
      error.statusCode = 400;
      throw error;
    }

    await ensureUniqueSlug(slug, branchId);

    updateData.name = data.name.trim();
    updateData.slug = slug;
  }

  if (data.description !== undefined) {
    updateData.description = data.description.trim() || null;
  }

  if (data.mood !== undefined) {
    updateData.mood = data.mood.trim() || null;
  }

  return updateBranch(branchId, updateData);
}

export async function deleteMyBranch(userId, branchId) {
  const branch = await findBranchById(branchId);

  ensureBranchExists(branch);
  ensureBranchOwner(branch, userId);

  await deleteBranch(branchId);

  return {
    message: "Branch deleted successfully.",
  };
}

export async function publishMyBranch(userId, branchId) {
  const branch = await findBranchById(branchId);

  ensureBranchExists(branch);
  ensureBranchOwner(branch, userId);

  if (branch.subbranches.length < 1) {
    const error = new Error("A Branch cannot be published without at least one Subbranch.");
    error.statusCode = 400;
    throw error;
  }

  return updateBranch(branchId, {
    isPublic: true,
  });
}

export async function unpublishMyBranch(userId, branchId) {
  const branch = await findBranchById(branchId);

  ensureBranchExists(branch);
  ensureBranchOwner(branch, userId);

  return updateBranch(branchId, {
    isPublic: false,
  });
}
