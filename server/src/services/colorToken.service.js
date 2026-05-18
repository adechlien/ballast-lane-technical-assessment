import { findSubbranchById } from "../repositories/subbranch.repository.js";
import {
  createColorToken,
  deleteColorToken,
  findColorTokenById,
  findColorTokenBySubbranchIdAndName,
  updateColorToken,
} from "../repositories/colorToken.repository.js";

function normalizeHexColor(value) {
  return value.trim().toUpperCase();
}

function ensureSubbranchExists(subbranch) {
  if (!subbranch) {
    const error = new Error("Subbranch not found.");
    error.statusCode = 404;
    throw error;
  }
}

function ensureColorTokenExists(colorToken) {
  if (!colorToken) {
    const error = new Error("Color Token not found.");
    error.statusCode = 404;
    throw error;
  }
}

function ensureSubbranchOwner(subbranch, userId) {
  if (subbranch.branch.ownerId !== userId) {
    const error = new Error("You are not allowed to modify Color Tokens inside this Subbranch.");
    error.statusCode = 403;
    throw error;
  }
}

function ensureColorTokenBelongsToSubbranch(colorToken, subbranchId) {
  if (colorToken.subbranchId !== subbranchId) {
    const error = new Error("Color Token does not belong to this Subbranch.");
    error.statusCode = 404;
    throw error;
  }
}

async function ensureUniqueColorTokenName(subbranchId, name, currentColorTokenId = null) {
  const existingColorToken = await findColorTokenBySubbranchIdAndName(
    subbranchId,
    name.trim()
  );

  if (existingColorToken && existingColorToken.id !== currentColorTokenId) {
    const error = new Error("Color Token name already exists inside this Subbranch.");
    error.statusCode = 409;
    throw error;
  }
}

export async function createMyColorToken(
  userId,
  subbranchId,
  { name, value, usage }
) {
  const subbranch = await findSubbranchById(subbranchId);

  ensureSubbranchExists(subbranch);
  ensureSubbranchOwner(subbranch, userId);

  const normalizedName = name.trim();

  await ensureUniqueColorTokenName(subbranchId, normalizedName);

  return createColorToken({
    name: normalizedName,
    value: normalizeHexColor(value),
    usage: usage?.trim() || null,
    subbranchId,
  });
}

export async function updateMyColorToken(
  userId,
  subbranchId,
  colorTokenId,
  data
) {
  const subbranch = await findSubbranchById(subbranchId);

  ensureSubbranchExists(subbranch);
  ensureSubbranchOwner(subbranch, userId);

  const colorToken = await findColorTokenById(colorTokenId);

  ensureColorTokenExists(colorToken);
  ensureColorTokenBelongsToSubbranch(colorToken, subbranchId);

  const updateData = {};

  if (data.name !== undefined) {
    const normalizedName = data.name.trim();

    await ensureUniqueColorTokenName(
      subbranchId,
      normalizedName,
      colorTokenId
    );

    updateData.name = normalizedName;
  }

  if (data.value !== undefined) {
    updateData.value = normalizeHexColor(data.value);
  }

  if (data.usage !== undefined) {
    updateData.usage = data.usage.trim() || null;
  }

  return updateColorToken(colorTokenId, updateData);
}

export async function deleteMyColorToken(userId, subbranchId, colorTokenId) {
  const subbranch = await findSubbranchById(subbranchId);

  ensureSubbranchExists(subbranch);
  ensureSubbranchOwner(subbranch, userId);

  const colorToken = await findColorTokenById(colorTokenId);

  ensureColorTokenExists(colorToken);
  ensureColorTokenBelongsToSubbranch(colorToken, subbranchId);

  await deleteColorToken(colorTokenId);

  return {
    message: "Color Token deleted successfully.",
  };
}
