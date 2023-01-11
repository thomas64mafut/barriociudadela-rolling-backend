const express = require('express');
const router = express.Router();

router.use('/products', require('./product'))
router.use('/ingredients', require('./ingredients'))
router.use('/cart', require('./cart'))



module.exports = router; 