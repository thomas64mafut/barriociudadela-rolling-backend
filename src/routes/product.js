const express = require('express');
const router = express.Router();

router.use('/burger', require('./burger'))
router.use('/drink', require('./drink'))
router.use('/snack', require('./snack'))
router.use('/sandwich', require('./sandwich'))



module.exports= router