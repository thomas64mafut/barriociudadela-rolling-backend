const express = require('express');
const router = express.Router();

router.use('/products', require('./product'))
router.use('/ingredients', require('./ingredients'))


module.exports = router; 