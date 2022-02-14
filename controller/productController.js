const { findAllProducts } = require('../model/productModel')

const getAllProducts = async (req, res) => {
  try {
    const result = await findAllProducts();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

module.exports = { getAllProducts };
