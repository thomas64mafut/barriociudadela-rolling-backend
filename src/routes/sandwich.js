const express = require('express');
const router = express.Router();

const { addSandwich } = require('../controllers/sandwich');

router.post('/sandwich', addSandwich)

module.exports= router