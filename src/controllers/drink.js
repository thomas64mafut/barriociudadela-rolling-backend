const { Drink } = require('../models/Drink')

const addDrink = async (req, res) => {
    try {
        const newDrink =  new Drink(req.body)
        await newDrink.save();
        res.status(200).json({message: 'Drink created successfully', newDrink})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getDrinks = async (req,res) => {
    try {
        const Drinks = await Drink.find({ isDeleted: false });
        res.status(200).json({message: 'Drinks obtained correctly', Drinks})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const editDrink = async (req,res) => {
    try {
        const {id} = req.params;
        const updatedDrink = await Drink.findByIdAndUpdate(id, req.body, {new : true})
        res.status(200).json({message: 'properly edited Drink', updatedDrink})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const deleteDrink =  async (req,res) => {
    try {
        const {id} = req.params;
        await Drink.findByIdAndUpdate({ _id : id }, { isDeleted: true });
        res.status(200).json({message: 'Drink deleted correctly'})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports = {
    addDrink,
    getDrinks,
    editDrink,
    deleteDrink
}
