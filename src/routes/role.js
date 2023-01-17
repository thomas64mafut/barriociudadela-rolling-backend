const express = require('express');
const { addRole, getAllRoles } = require('../controllers/role');
const { decodeToken, adminRequiredValidation } = require('../middlewares/auth');
const router = express.Router();

router.post('/add', decodeToken, adminRequiredValidation, addRole);
router.get('/', decodeToken, adminRequiredValidation, getAllRoles);

module.exports = router; 