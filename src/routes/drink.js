const express = require('express');
const router = express.Router();

const { addDrink, getDrinks, editDrink } = require('../controllers/drink');

router.post('/', addDrink)
router.get('/', getDrinks)
router.put('/:id', editDrink)

module.exports= router