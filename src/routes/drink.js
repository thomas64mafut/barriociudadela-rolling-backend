const express = require('express');
const router = express.Router();

const { addDrink, getDrinks, editDrink, deleteDrink } = require('../controllers/drink');

router.post('/', addDrink)
router.get('/', getDrinks)
router.put('/:id', editDrink)
router.patch('/delete/:id', deleteDrink)

module.exports= router