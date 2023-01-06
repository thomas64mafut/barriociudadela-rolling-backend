const express = require('express');
const router = express.Router();

const { addBurger } = require('../controllers/burger');
const { addDrink } = require('../controllers/drink');
const { addSandwich } = require('../controllers/sandwich');
const { addSnack } = require('../controllers/snack');

router.post('/burger', addBurger)
router.post('/drink', addDrink)
router.post('/snack', addSnack)
router.post('/sandwich', addSandwich)

router.get('/', getProducts)
router.put('/:id', editProduct)
router.delete('/', deleteProduct)


module.exports= router