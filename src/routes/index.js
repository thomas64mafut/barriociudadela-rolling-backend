const express = require('express');
const router = express.Router();


router.use('/products', require('./product'))
router.use('/ingredients', require('./ingredients'))

router.use('/user', require ('./user'));
router.use('/role', require ('./role'));


module.exports = router; 