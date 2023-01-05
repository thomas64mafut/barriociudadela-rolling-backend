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



module.exports= {
    addProduct
}