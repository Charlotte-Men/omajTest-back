const router = require('express').Router();
const sizeController = require('../controller/sizeController');

router.get('/', sizeController.getAllSizes);

module.exports = router;
