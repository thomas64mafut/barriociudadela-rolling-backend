const express = require('express');
const router = express.Router();
const {addIngredient, getIngredients, deleteIngredient} = require('./../controllers/ingredients')

router.post('/add', addIngredient)
router.get('/', getIngredients)
router.patch('/:id', deleteIngredient)


module.exports= router