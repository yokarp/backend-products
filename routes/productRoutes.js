const express = require('express');
const { getProducts, getProductsByExpirationDate, getProductsByQuantity, createProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.get('/expirations', getProductsByExpirationDate);
router.get('/quantities', getProductsByQuantity);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

module.exports = router;