const mysql = require('../env');

const findAllProducts = async () => {
  const result = await mysql.query('SELECT * FROM product');
  return result;
};

module.exports = { findAllProducts };
