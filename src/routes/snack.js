const express = require('express');
const router = express.Router();

const { addSnack } = require('../models/Snack')

router.post('/snack', addSnack)

module.exports= router