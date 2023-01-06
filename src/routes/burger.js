const express = require('express');
const router = express.Router();

const { addBurger } = require('../controllers/burger');

router.post('/burger', addBurger)

module.exports= router