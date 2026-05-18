import { prisma } from "../db/prisma.js";

export async function findColorTokenById(id) {
  return prisma.colorToken.findUnique({
    where: {
      id,
    },
    include: {
      subbranch: {
        include: {
          branch: true,
        },
      },
    },
  });
}

export async function findColorTokenBySubbranchIdAndName(subbranchId, name) {
  return prisma.colorToken.findFirst({
    where: {
      subbranchId,
      name,
    },
  });
}

export async function createColorToken(data) {
  return prisma.colorToken.create({
    data,
  });
}

export async function updateColorToken(id, data) {
  return prisma.colorToken.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteColorToken(id) {
  return prisma.colorToken.delete({
    where: {
      id,
    },
  });
}
