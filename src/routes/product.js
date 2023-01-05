const express = require('express');
const router = express.Router();
const {addProduct, getProducts, editProduct, deleteProduct} = require('./../controllers/product')

router.post('/', addProduct)
router.get('/', getProducts)
router.put('/:id', editProduct)
router.delete('/', deleteProduct)


module.exports= router