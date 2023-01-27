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

const getAllRoles = async (req, res) => {
    try {
        const rolesFound  = await Role.find( { isDeleted: false });
        if (rolesFound.length === 0) return res.status(400).json({ message: 'lista de roles vacia' });
        return res.status(200).json({ message: 'roles extraidos de forma exitosa', roles: rolesFound })
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

module.exports = {
    addRole,
    getAllRoles,
}