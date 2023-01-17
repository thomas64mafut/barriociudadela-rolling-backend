const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyJwt = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ message: 'Token not found.'})
        jwt.verify(token, process.env.SECRET_WORD);
        next();
    } catch (error) {
        if (error.message === 'jwt expired') return res.status(401).json({ message: 'Expired token, please log in again.'})
        res.status(error.code || 500).json({ message: error.message });
    }
};

const decodeToken = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ message: 'Token not found'})
        const { user } = jwt.verify(token, process.env.SECRET_WORD);
        req.userId = user.id;
        req.userRole = user.role;
        next();
    } catch (error) {
        if(error.message === 'jwt expired') 
            return res.status(401).json({ message: 'Expired token, please log in again.'})
    }
};

const adminRequiredValidation = (req, res, next) => {
    if (req.userRole?.name !== 'admin') 
        return res.status(401).json({ message: 'User without necessary privileges.'})
    next();
};

module.exports = {
    verifyJwt,
    decodeToken,
    adminRequiredValidation,
};