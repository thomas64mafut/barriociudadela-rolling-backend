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

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFound = await User.findOne({ email, isDeleted: false })

        if (!userFound || password !== userFound.password) return res.status(400).json({ message: 'Incorrect user credentials' });

        res.status(200).json({ message: 'usuario autenticado exitosamente' })
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userFound = await User.findById(id);
        if (!userFound) return res.status(400).json({ message: 'usuario no encontrado' });
        res.status(200).json({ message: 'datos de usuario localizados con exito', userFound });
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const { page = 1, limit = 10, paginated = false } = req.query;
        const usersCount = await User.count();
        const pagesCount = Math.ceil(usersCount / limit);
        const skip = (page - 1) * limit;
        if (page > pagesCount) return res.status(400).json({ message: 'pagina no encontrada'});
        if (!paginated) {
            const usersFound  = await User.find( { isDeleted: false }).select('-password -_id -deleted').populate('role');
            return res.status(200).json({ message: 'usuarios extraidos de forma exitosa', users: usersFound })
        }

        const usersFound  = await User.find( { isDeleted: false }).skip(skip).limit(limit).select('-password -_id -deleted').populate('role');
        return res.status(200).json({ message: 'usuarios extraidos de forma exitosa',usersCount, pagesCount, currentPage: page, users: usersFound })
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToDelete = await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true }).select('-password -_id -role -createdAt -profilePicture');
        if (!userToDelete) return res.status(400).json({ message: 'usuario no encontrado' });
        res.status(200).json({ message: 'usuario eliminado exitosamente', userToDelete });
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: 'usuario editado correctamente', updatedUser })
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message });
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
    getAllUsers,
    deleteUser,
    updateUser,
}