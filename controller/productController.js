const { 
  findAllProducts, 
  findProductsBySize, 
  findProductsByCategory,
  findProductsByBrand,
  findProductsByColor
 } = require('../model/productModel')

const getAllProducts = async (req, res) => {
  try {
    const result = await findAllProducts();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

const getAllByCategory = async (req, res) => {
  try {
    const result = await findProductsByCategory(req.params.cat);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

const getAllByBrand = async (req, res) => {
  try {
    const result = await findProductsByBrand(req.params.brand);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

const getAllByColor = async (req, res) => {
  try {
    const result = await findProductsByColor(req.params.col);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

const getAllBySize = async (req, res) => {
  try {
    const result = await findProductsBySize(req.params.sizeId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

module.exports = { 
  getAllProducts, 
  getAllBySize, 
  getAllByCategory,
  getAllByBrand,
  getAllByColor
 };
