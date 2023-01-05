const { findOneAndUpdate, findByIdAndUpdate } = require('./../models/Product');
const Product = require('./../models/Product')


const addProduct = async(req, res) => {
    try {
        const newProduct =  new Product(req.body)
        await newProduct.save();
        res.status(200).json({message: 'Product created successfully', newProduct})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getProducts = async(req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json({message: 'products obtained correctly', products})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const editProduct = async(req,res) => {
    try {
        const {id} = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new : true})
        res.status(200).json({message: 'properly edited product', updatedProduct})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}

const deleteProduct =  async(req,res) => {
    try {
        const {id} = req.query;
        await Product.deleteOne({_id : id});
        res.status(200).json({message: 'Product deleted correctly'})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}


module.exports= {
    addProduct,
    getProducts,
    editProduct,
    deleteProduct
}