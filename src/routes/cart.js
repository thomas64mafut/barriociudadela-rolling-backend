const express = require('express');
const { createCart, getCart } = require('../controllers/cart');
const { createCartValidations } = require('../middlewares/cart');
const router = express.Router();


router.post('/', createCartValidations , createCart)
router.get('/', getCart)


module.exports= router