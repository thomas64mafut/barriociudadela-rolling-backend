const { Sandwich } = require('./../models/Sandwich')

const addSandwich = async (req, res) => {
    try {
        const newSandwich =  new Sandwich(req.body)
        await newSandwich.save();
        res.status(200).json({message: 'sandwich created successfully', newSandwich})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getSandwiches = async (req,res) => {
    try {
        const Sandwichs = await sSndwich.find().populate('ingredients');
        res.status(200).json({message: 'Sandwichs obtained correctly', Sandwichs})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const editSandwich = async (req,res) => {
    try {
        const {id} = req.params;
        const updatedSandwich = await Sandwich.findByIdAndUpdate(id, req.body, {new : true})
        res.status(200).json({message: 'properly edited Sandwich', updatedSandwich})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const deleteSandwich =  async (req,res) => {
    try {
        const {id} = req.query;
        await Sandwich.deleteOne({_id : id});
        res.status(200).json({message: 'Sandwich deleted correctly'})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports = {
    addSandwich,
    getSandwiches,
    editSandwich,
    deleteSandwich
}