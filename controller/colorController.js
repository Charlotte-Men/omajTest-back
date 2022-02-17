const { findAllColors } = require('../model/colorModel')

const getAllColors = async (req, res) => {
  try {
    const result = await findAllColors();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`);
  }
};

module.exports = { getAllColors };
