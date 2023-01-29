const express = require('express');
const { createCart, getCart, deleteCart, buyCart, getAllCarts, cancelOrder, preparingOrder, delivered } = require('../controllers/cart');
const { decodeToken } = require('../middlewares/auth');
const { createCartValidations } = require('../middlewares/cart');
const router = express.Router();
decodeToken

router.post('/', decodeToken, createCartValidations , createCart)
router.get('/', decodeToken, getCart)
router.get('/allCarts', decodeToken, getAllCarts)
router.patch('/:id', decodeToken, deleteCart)
router.put('/buy/:id', decodeToken, buyCart)
router.patch('/cancel/:id', decodeToken, cancelOrder)
router.patch('/preparing/:id', decodeToken, preparingOrder)
router.patch('/delivered/:id', decodeToken, delivered)

module.exports= router