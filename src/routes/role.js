const express = require('express');
const { addRole } = require('../controllers/role');
const router = express.Router();

router.post('/add', addRole);

module.exports = router; 