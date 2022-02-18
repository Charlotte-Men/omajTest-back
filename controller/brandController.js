const { findAllBrands } = require('../model/brandModel')

const getAllBrands = async (req, res) => {
  try {
    const result = await findAllBrands();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

module.exports = { 
  getAllBrands,
 };
