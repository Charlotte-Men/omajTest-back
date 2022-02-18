const router = require('express').Router();
const productController = require('../controller/productController');

router.get('/', productController.getProducts);
router.post('/', productController.postOneProduct);
router.put('/:pdtId', productController.putOneProduct);
router.delete('/:pdtId', productController.deleteOneProduct);

module.exports = router;
