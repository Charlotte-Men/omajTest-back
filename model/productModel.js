const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findProducts = async (color_req, brand_req, size_req, category_req) => {
  const result = await prisma.product.findMany({
    where: {
      AND: [
        {product_category: category_req.length !== 0 ? { in: category_req } : undefined,},
        {product_color: color_req.length !== 0 ? { in: color_req } : undefined,},
        {product_brand: brand_req.length !== 0 ? { in: brand_req } : undefined,},
        {sizes: {
          some : { 
            size_id: size_req.length !== 0 ? {in: size_req } : undefined,
        },},},
      ],
    },
  });
  return result;
}

const findOneProduct = async (id) => {
  const result = await prisma.product.findUnique({
    where: { product_id: parseInt(id)}
  });
  return result;
};

const createOneProduct = async (body) => {
  const result = await prisma.product.create({
    data: { ...body },
  });
  const newProduct = await findOneProduct(result.product_id);
  return newProduct;
};

const updateOneProduct = async (id, body) => {
  const result = await prisma.product.update({
    where: { product_id: parseInt(id) },
    data: { ...body },
  });
  return result;
};

const removeOneProduct = async (id) => {
  const result = await prisma.product.delete({
    where: { product_id: parseInt(id) }
  });
  return result;
};

module.exports = { 
  findProducts,
  createOneProduct,
  updateOneProduct,
  removeOneProduct
};
