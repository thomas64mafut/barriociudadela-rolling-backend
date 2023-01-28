const express = require('express');
const router = express.Router();

const { addSnack, getSnacks, deleteSnack, editSnack } = require('../controllers/snack')

router.post('/', addSnack);
router.get('/', getSnacks);
router.put('/:id', editSnack)
router.patch('/delete/:id', deleteSnack);

module.exports= router