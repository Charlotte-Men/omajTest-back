const { findAllSizes } = require('../model/sizeModel')

const getAllSizes = async (req, res) => {
  try {
    const result = await findAllSizes();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

module.exports = { getAllSizes };
