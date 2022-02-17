const router = require('express').Router();
const colorController = require('../controller/colorController');

router.get('/', colorController.getAllColors);

module.exports = router;
