const express = require('express');
const { createCart, getCart } = require('../controllers/cart');
const { decodeToken } = require('../middlewares/auth');
const { createCartValidations } = require('../middlewares/cart');
const router = express.Router();
decodeToken

router.post('/', decodeToken, createCartValidations , createCart)
router.get('/', decodeToken, getCart)


module.exports= router