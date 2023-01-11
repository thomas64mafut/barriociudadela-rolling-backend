const express = require('express');
const router = express.Router();

const { addBurger, getBurgers, deleteBurger, editBurger } = require('../controllers/burger');

router.post('/', addBurger)
router.get('/', getBurgers)
router.put('/:id', editBurger)
router.delete('/', deleteBurger)

module.exports= router