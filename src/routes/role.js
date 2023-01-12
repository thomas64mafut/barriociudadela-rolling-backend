const express = require('express');
const { addRole, getAllRoles } = require('../controllers/role');
const router = express.Router();

router.post('/add', addRole);
router.get('/', getAllRoles);

module.exports = router; 