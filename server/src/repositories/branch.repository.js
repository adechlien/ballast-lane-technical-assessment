import { prisma } from "../db/prisma.js";

export async function findBranchesByOwnerId(ownerId) {
  return prisma.branch.findMany({
    where: {
      ownerId,
    },
    include: {
      subbranches: {
        include: {
          colorTokens: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function findBranchById(id) {
  return prisma.branch.findUnique({
    where: {
      id,
    },
    include: {
      subbranches: {
        include: {
          colorTokens: true,
        },
      },
    },
  });
}

export async function findBranchBySlug(slug) {
  return prisma.branch.findUnique({
    where: {
      slug,
    },
  });
}

export async function createBranch(data) {
  return prisma.branch.create({
    data,
    include: {
      subbranches: {
        include: {
          colorTokens: true,
        },
      },
    },
  });
}

export async function updateBranch(id, data) {
  return prisma.branch.update({
    where: {
      id,
    },
    data,
    include: {
      subbranches: {
        include: {
          colorTokens: true,
        },
      },
    },
  });
}

export async function deleteBranch(id) {
  return prisma.branch.delete({
    where: {
      id,
    },
  });
}
