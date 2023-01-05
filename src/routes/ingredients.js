const express = require('express');
const router = express.Router();
const {addIngredient, getIngredients, editIngredient, deleteIngredient} = require('./../controllers/ingredients')

router.post('/', addIngredient)
router.get('/', getIngredients)
router.put('/:id', editIngredient)
router.delete('/', deleteIngredient)


module.exports= router