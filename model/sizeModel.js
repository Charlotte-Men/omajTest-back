const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllSizes = async () => {
  const result = await prisma.size.findMany();
  return result;
};

module.exports = { findAllSizes };
