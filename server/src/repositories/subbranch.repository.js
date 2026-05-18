import { prisma } from "../db/prisma.js";

export async function findSubbranchById(id) {
  return prisma.subbranch.findUnique({
    where: {
      id,
    },
    include: {
      colorTokens: true,
      branch: true,
    },
  });
}

export async function findSubbranchByBranchIdAndSlug(branchId, slug) {
  return prisma.subbranch.findFirst({
    where: {
      branchId,
      slug,
    },
  });
}

export async function createSubbranch(data) {
  return prisma.subbranch.create({
    data,
    include: {
      colorTokens: true,
    },
  });
}

export async function updateSubbranch(id, data) {
  return prisma.subbranch.update({
    where: {
      id,
    },
    data,
    include: {
      colorTokens: true,
    },
  });
}

export async function deleteSubbranch(id) {
  return prisma.subbranch.delete({
    where: {
      id,
    },
  });
}
