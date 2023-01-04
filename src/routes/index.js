const express = require('express');
const router = express.Router();

router.use('/user', require ('./user'));
router.use('/role', require ('./role'));

module.exports = router; 