const express = require('express');
const { addRole, getAllRoles, deleteRole } = require('../controllers/role');
const { decodeToken, adminRequiredValidation } = require('../middlewares/auth');
const router = express.Router();

router.post('/add', decodeToken, adminRequiredValidation, addRole);
router.patch('/:id', decodeToken, adminRequiredValidation, deleteRole);
router.get('/', decodeToken, adminRequiredValidation, getAllRoles);

module.exports = router; 