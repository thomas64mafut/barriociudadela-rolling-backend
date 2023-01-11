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
        const burgers = await Burger.find().populate('ingredients');
        res.status(200).json({message: 'Burgers obtained correctly', burgers})
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
        const {id} = req.query;
        await Burger.deleteOne({_id : id});
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
