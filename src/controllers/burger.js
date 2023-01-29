const { Burger } = require('../models/Burger')

const addBurger = async (req, res) => {
    try {
        const newBurger =  new Burger(req.body)
        await newBurger.save();
        res.status(200).json({message: 'Burger created successfully', newBurger})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getBurgers = async (req,res) => {
    try {
        const products = await Burger.find({ isDeleted: false }).populate('ingredients');
        res.status(200).json({message: 'Burgers obtained correctly', products})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const editBurger = async (req,res) => {
    try {
        const {id} = req.params;
        const updatedBurger = await Burger.findByIdAndUpdate(id, req.body, {new : true})
        res.status(200).json({message: 'properly edited Burger', updatedBurger})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const deleteBurger =  async (req,res) => {
    try {
        const { id } = req.params;
        await Burger.findByIdAndUpdate({ _id : id }, { isDeleted: true });
        res.status(200).json({message: 'Burger deleted correctly'})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports = {
    addBurger,
    getBurgers,
    editBurger,
    deleteBurger
}
