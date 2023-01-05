const express = require('express');
const router = express.Router();
const {saludo, addProduct, getProducts, editProduct} = require('./../controllers/product')

router.post('/', addProduct)
router.get('/', getProducts)
router.put('/:id', editProduct)


module.exports= router