const express = require('express');
const router = express.Router();

const { getAllProducts } = require('../controllers/product')

router.use('/burger', require('./burger'))
router.use('/drink', require('./drink'))
router.use('/snack', require('./snack'))
router.use('/sandwich', require('./sandwich'))

router.get('/', getAllProducts)

module.exports= router