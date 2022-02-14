const router = require('express').Router();
const categoryController = require('../controller/categoryController');

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.postOne);
router.put('/:catId', categoryController.putOne);
router.delete('/:catId', categoryController.deleteOne);

module.exports = router;