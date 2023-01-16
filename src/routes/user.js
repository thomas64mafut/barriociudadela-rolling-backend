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
const router = express.Router();

router.post('/register', verifyRegisterFields(), validate, registerUser);
router.post('/login', verifyLoginFields(), validate, loginUser);
router.patch('/:id', updateUser); // editar metodo => recibir token 

router.get('/:id', getUser);
router.get('/', getAllUsers);
router.patch('/delete/:id', deleteUser);

module.exports = router; 