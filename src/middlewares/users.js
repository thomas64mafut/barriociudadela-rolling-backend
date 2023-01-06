const User = require('../models/User');
const { body } = require('express-validator');

const verifyRegisterFields = () => {
    return [
        body('email').isEmail().normalizeEmail().trim().escape().custom(async value => {
            return await User.findOne({ email: value, isDeleted: false }).then(user => {
                if (user) return Promise.reject('e-mail already in use');
            })
        }),
        body('password').isLength({ min: 6, max: 16 }),
        body('username').not().isEmpty().trim().escape().isLength({ min: 4, max: 24 }),
    ];
};

const verifyLoginFields = () => {
    return [
        body('email').isEmail().normalizeEmail().trim().escape(),
        body('password').isLength({ min: 6, max: 16 }),
    ];
}

module.exports = {
    verifyRegisterFields,
    verifyLoginFields,
}