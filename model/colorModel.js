const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllColors = async () => {
  const result = await prisma.color.findMany();
  return result;
};

module.exports = { findAllColors };
