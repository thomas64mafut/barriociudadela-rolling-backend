const express = require('express');
const router = express.Router();

const { addBurger, getBurgers, deleteBurger, editBurger } = require('../controllers/burger');

router.post('/', addBurger)
router.get('/', getBurgers)
router.put('/:id', editBurger)
router.patch('/delete/:id', deleteBurger)

module.exports= router