const router = require('express').Router();
const categoryController = require('../controller/categoryController');

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.postOneCategory);
router.put('/:catId', categoryController.putOneCategory);
router.delete('/:catId', categoryController.deleteOneCategory);

module.exports = router;
