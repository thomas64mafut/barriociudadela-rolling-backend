const express = require('express');
const router = express.Router();

router.use('/product', require('./product'));
router.use('/ingredient', require('./ingredients'));
router.use('/category', require('./category'));
router.use('/cart', require('./cart'));
router.use('/user', require ('./user'));
router.use('/role', require ('./role'));

module.exports = router; 