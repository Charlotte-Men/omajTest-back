const { 
  findAllProducts, 
  findProductsBySize, 
  findProductsByCategory,
  findProductsByBrand,
  findProductsByColor,
  createOneProduct,
  updateOneProduct,
  removeOneProduct
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
    const result = await findProductsBySize(req.params.size);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};


const postOneProduct = async (req, res) => {
  try {
    const result = await createOneProduct(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const putOneProduct = async (req, res) => {
  try {
    const result = await updateOneProduct(req.params.pdtId, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const result = await removeOneProduct(req.params.pdtId);
    res.status(200).send('This product has been successfully removed');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { 
  getAllProducts, 
  getAllBySize, 
  getAllByCategory,
  getAllByBrand,
  getAllByColor,
  postOneProduct,
  putOneProduct,
  deleteOneProduct
 };
