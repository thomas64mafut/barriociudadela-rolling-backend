const express = require('express');
const router = express.Router();
const {saludo, addProduct} = require('./../controllers/product')

router.post('/', addProduct)

module.exports= router