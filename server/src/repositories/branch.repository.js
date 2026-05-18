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

export async function findPublicBranches({ search } = {}) {
  return prisma.branch.findMany({
    where: {
      isPublic: true,
      ...(search
        ? {
            OR: [
              {
                name: {
                  contains: search,
                },
              },
              {
                description: {
                  contains: search,
                },
              },
              {
                mood: {
                  contains: search,
                },
              },
            ],
          }
        : {}),
    },
    include: {
      owner: {
        select: {
          id: true,
          name: true,
        },
      },
      subbranches: {
        include: {
          colorTokens: true,
        },
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function findPublicBranchBySlug(slug) {
  return prisma.branch.findFirst({
    where: {
      slug,
      isPublic: true,
    },
    include: {
      owner: {
        select: {
          id: true,
          name: true,
        },
      },
      subbranches: {
        include: {
          colorTokens: true,
        },
      },
    },
  });
}
