const express = require('express');
const productController = require('../controllers/product-controllers');

const router = express.Router();


router.get('/products', productController.getProducts);

router.post('/products', productController.createProduct);

module.exports = router;