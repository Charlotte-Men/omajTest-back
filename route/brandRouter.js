const router = require('express').Router();
const brandController = require('../controller/brandController');

router.get('/', brandController.getAllBrands);

module.exports = router;
