const { Burger } = require('../models/Burger');
const { Sandwich } = require('../models/Sandwich');
const { Drink } = require('../models/Drink');
const { Snack } = require('../models/Snack');

const getAllProducts = async (req, res) => {
    try {
        const burgers = await Burger.find().populate('ingredients category');
        const sandwiches = await Sandwich.find().populate('ingredients category');
        const snacks = await Snack.find();
        const drinks = await Drink.find();

        const products = [].concat.apply([], [burgers, sandwiches, snacks, drinks]);
        res.status(200).json({ message: 'productos conseguidos con exito', products});
    } catch (error) {
        return res.status(500 || error.code).json({ message: error.message });
    }
}

module.exports = {
    getAllProducts,
}