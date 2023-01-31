const { findOneAndUpdate, findByIdAndUpdate } = require('./../models/Ingredient');
const Ingredient = require('./../models/Ingredient')

const addIngredient = async(req, res) => {
    try {
        const newIngredient =  new Ingredient(req.body)
        await newIngredient.save();
        res.status(200).json({message: 'Ingredient created successfully', newIngredient})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getIngredients = async(req,res) => {
    try {
        const ingredients = await Ingredient.find({ isDeleted: false });
        res.status(200).json({message: 'products obtained correctly', ingredients})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const deleteIngredient =  async (req,res) => {
    try {
        const { id } = req.params;
        const deletedIngredient = await Ingredient.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        res.status(200).json({message: 'Ingredient deleted correctly'})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports= {
    addIngredient,
    getIngredients,
    deleteIngredient
}
