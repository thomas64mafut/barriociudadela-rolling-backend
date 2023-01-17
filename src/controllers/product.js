const { Burger } = require('../models/Burger');
const { Drink } = require('../models/Drink');
const { Snack } = require('../models/Snack');

const getAllProducts = async (req, res) => {
    try {
        const burgers = await Burger.find().populate('ingredients');
        const snacks = await Snack.find();
        const drinks = await Drink.find();

        const products = [].concat.apply([], [burgers, snacks, drinks]);
        res.status(200).json({ message: 'productos conseguidos con exito', products});
    } catch (error) {
        return res.status(500 || error.code).json({ message: error.message });
    }
}

module.exports = {
    getAllProducts,
}