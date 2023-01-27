const express = require('express');
const { createCart, getCart, deleteCart, buyCart, getAllCarts } = require('../controllers/cart');
const { decodeToken } = require('../middlewares/auth');
const { createCartValidations } = require('../middlewares/cart');
const router = express.Router();
decodeToken

router.post('/', decodeToken, createCartValidations , createCart)
router.get('/', decodeToken, getCart)
router.get('/allCarts', getAllCarts)
router.patch('/:id', deleteCart)
router.patch('/buy/:id', buyCart)

module.exports= router