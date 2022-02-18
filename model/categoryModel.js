const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllCategories = async () => {
  const result = await prisma.category.findMany();
  return result;
};

const findOneCategory = async (id) => {
  const result = await prisma.category.findUnique({
    where: { category_id : id }
  });
  return result;
};

const createOneCategory = async (body) => {
  const result = await prisma.category.create({
    data: { ...body },
  });
  const newCategory = await findOneCategory(result.category_id);
  return newCategory;
};

const updateOneCategory = async (id, body) => {
  const result = await prisma.category.update({
    where: { category_id: parseInt(id) },
    data: { ...body },
  });
  return result;
};

const removeOneCategory = async (id) => {
  const result = await prisma.category.delete({
    where: { category_id: parseInt(id) }
  });
  return result;
};

module.exports = { 
  findAllCategories, 
  createOneCategory, 
  updateOneCategory, 
  removeOneCategory 
};
