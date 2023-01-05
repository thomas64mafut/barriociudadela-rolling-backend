const express = require('express');
const router = express.Router();
const {saludo, addProduct, getProducts} = require('./../controllers/product')

router.post('/', addProduct)
router.get('/', getProducts)


module.exports= router