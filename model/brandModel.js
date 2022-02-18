const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllBrands = async () => {
  const result = await prisma.brand.findMany();
  return result;
};

module.exports = { findAllBrands };
