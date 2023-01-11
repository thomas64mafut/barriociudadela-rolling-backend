const express = require('express');
const router = express.Router();

const { addSnack, getSnacks } = require('../controllers/snack')

router.post('/', addSnack)
router.get('/', getSnacks)

module.exports= router