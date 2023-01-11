const express = require('express');
const { createCart } = require('../controllers/cart');
const router = express.Router();


router.post('/', createCart)


module.exports= router