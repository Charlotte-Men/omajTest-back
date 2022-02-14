const router = require('express').Router();
const productController = require('../controller/productController');

router.get('/', productController.getAllProducts);

module.exports = router;
