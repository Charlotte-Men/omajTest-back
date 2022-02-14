const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllProducts = async () => {
  const result = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
      color: true,
      product_has_size: {
        include: {
          size: true,
        },
      },
    },
  });
  return result;
};

const findProductsByCategory = async (category) => {
  const result = await prisma.category.findMany({
    where: { category_name: category },
    include: {
      product: {
        include: {
          brand: true,
          color: true,
          product_has_size: {
            include : {
              size: true
            }
          }
        },
      },
    },
  })
  return result;
};

const findProductsByBrand = async (brand) => {
  const result = await prisma.brand.findMany({
    where: { brand_name: brand },
    include: {
      product: {
        include: {
          category: true,
          color: true,
          product_has_size: {
            include : {
              size: true
            }
          }
        },
      },
    },
  })
  return result;
};

const findProductsByColor = async (col) => {
  const result = await prisma.color.findMany({
    where: { color_name: col },
    include: {
      product: {
        include: {
          category: true,
          brand: true,
          product_has_size: {
            include : {
              size: true
            }
          }
        },
      },
    },
  })
  return result;
};

const findProductsBySize = async (sizeId) => {
  const result = await prisma.product_has_size.findMany({
    where: { size_id: parseInt(sizeId) },
    include: {
      size: true,
      product: {
        include: {
          category: true,
          brand: true,
          color: true,
        },
      },
    },
  })
  return result;
};

module.exports = { 
  findAllProducts, 
  findProductsBySize, 
  findProductsByCategory, 
  findProductsByBrand,
  findProductsByColor
};