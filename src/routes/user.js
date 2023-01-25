const express = require('express');
const router = express.Router();

const { 
    registerUser, 
    loginUser, 
    getUser, 
    getAllUsers, 
    deleteUser, 
    updateUser,
    loginStatus, 
} = require('../controllers/user.js');

const { validate } = require('../helpers/validate.js');
const { verifyRegisterFields, verifyLoginFields } = require('../middlewares/users.js');
const { decodeToken, verifyJwt, adminRequiredValidation } = require('../middlewares/auth');

router.post('/register', verifyRegisterFields(), validate, registerUser);
router.post('/login', verifyLoginFields(), validate, loginUser);
router.patch('/', decodeToken, updateUser); 

router.get('/status', decodeToken, loginStatus);
router.get('/:id', decodeToken, getUser);
router.get('/', decodeToken, adminRequiredValidation, getAllUsers);
router.patch('/delete/:id', decodeToken, adminRequiredValidation, deleteUser);


module.exports = router; 