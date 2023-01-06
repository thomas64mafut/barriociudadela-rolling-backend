const express = require('express');
const router = express.Router();

const { addDrink } = require('../controllers/drink');

router.post('/drink', addDrink)

module.exports= router