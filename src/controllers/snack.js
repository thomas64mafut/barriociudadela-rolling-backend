const { Snack } = require('../models/Snack')

const addSnack = async (req, res) => {
    try {
        const newSnack =  new Snack(req.body)
        await newSnack.save();
        res.status(200).json({message: 'Snack created successfully', newSnack})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getSnacks = async (req,res) => {
    try {
        const Snacks = await Snack.find();
        res.status(200).json({message: 'Snacks obtained correctly', Snacks})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const editSnack = async (req,res) => {
    try {
        const {id} = req.params;
        const updatedSnack = await Snack.findByIdAndUpdate(id, req.body, {new : true})
        res.status(200).json({message: 'properly edited Snack', updatedSnack})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const deleteSnack =  async (req,res) => {
    try {
        const {id} = req.query;
        await Snack.deleteOne({_id : id});
        res.status(200).json({message: 'Snack deleted correctly'})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports = {
    addSnack,
    getSnacks,
    editSnack,
    deleteSnack
}
