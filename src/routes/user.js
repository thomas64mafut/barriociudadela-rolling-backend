const express = require('express');
const { 
    registerUser, 
    loginUser, 
    getUser, 
    getAllUsers, 
    deleteUser, 
    updateUser, 
} = require('../controllers/user.js');
const { validate } = require('../helpers/validate.js');
const { verifyRegisterFields, verifyLoginFields } = require('../middlewares/users.js');
const { decodeToken, verifyJwt, adminRequiredValidation } = require('../middlewares/auth');
const router = express.Router();


router.post('/register', verifyRegisterFields(), validate, registerUser);
router.post('/login', verifyLoginFields(), validate, loginUser);
router.patch('/:id', decodeToken, updateUser); 

router.get('/:id', decodeToken, getUser);
router.get('/', adminRequiredValidation, getAllUsers);
router.patch('/delete/:id', verifyJwt, deleteUser);

module.exports = router; 