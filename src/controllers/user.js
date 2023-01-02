const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const userToRegister = req.body; 
        const newUser = new User(userToRegister);
        await newUser.save();
        res.status(200).json({ message: 'usuario creado exitosamente', newUser })
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

module.exports = {
    registerUser,
}