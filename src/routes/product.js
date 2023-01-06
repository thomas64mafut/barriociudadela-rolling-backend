const express = require('express');
const router = express.Router();

router.use('/burger', require('./burger'))
router.use('/drink', require('./drink'))
router.use('/snack', require('./snack'))
router.use('/sandwich', reuire('./sandwich'))


module.exports= router