const router = require('express').Router();
const productController = require('../controller/productController');

router.get('/', productController.getAllProducts);
router.get('/size/:sizeId', productController.getAllBySize)
router.get('/category/:cat', productController.getAllByCategory)
router.get('/brand/:brand', productController.getAllByBrand)
router.get('/color/:col', productController.getAllByColor)
router.post('/', productController.postOneProduct);
router.put('/:pdtId', productController.putOneProduct);
router.delete('/:pdtId', productController.deleteOneProduct);

module.exports = router;
