const express = require('express');
const { 
    registerUser, 
    loginUser, 
    getUser, 
    getAllUsers, 
    deleteUser, 
    updateUser, 
} = require('../controllers/user.js');
const router = express.Router();

router.get('/:id', getUser);
router.get('/', getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.patch('/:id', deleteUser);
router.patch('/:id', updateUser);

module.exports = router; 