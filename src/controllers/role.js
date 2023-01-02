const Role = require('../models/Role');

const addRole = async (req, res) => {
    try {
        const roleToAdd = req.body; 
        const newRole = new Role(roleToAdd);
        await newRole.save();
        res.status(200).json({ message: 'rol creado con exito', newRole })
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message });
    }
}

module.exports = {
    addRole,
}