const Cart = require("../models/Cart");


const createCart = async(req,res) => {
    try {
        const {name, quantity, price, removed, toppings, size} = req.body
        const cartFound = await Cart.findOne({ owner: req.userId, cartStatus : 'active' })
        if(!cartFound){
            const payload = {
                products: [
                    req.body,
                ],
                owner: req.userId, 
            }
            const cart = new Cart(payload);
            await cart.save();
            return res.status(200).json({message: 'Product was added to the cart successfully', payload});
        }
        const productFoundCart = cartFound.products?.find((cartItem)=> (cartItem.name === name) && (removed.toString() === cartItem.removed.toString()) && (toppings.toString() === cartItem.toppings.toString()) && (size === cartItem.size))
        if(productFoundCart) {
            const newProductsList = cartFound.products?.map((cartItem)=>{  
                if ((cartItem.name === name) && (removed?.toString() === cartItem?.removed?.toString()) && (toppings?.toString() === cartItem.toppings?.toString()) && (size === cartItem.size)) {
                return {
                    name,
                    quantity: quantity + cartItem.quantity,
                    price,
                    removed,
                    toppings,
                    size
                }           
                }    
                return cartItem
            });
            const cartUpdate = await Cart.findByIdAndUpdate(cartFound._id, {products : newProductsList} , {new:true});
            return res.status(200).json({message: 'Product was added to the cart successfully', cartUpdate});
        }
        const updatedCart = await Cart.findByIdAndUpdate(cartFound._id, {$push: {products: req.body}}, {new: true})
        return res.status(200).json({message: 'Product was added to the cart successfully', updatedCart});
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const getCart = async (req, res) => {
    try {
        const ownCart = await Cart.findOne({owner: req.userId, cartStatus : 'active' }).populate('products.removed').populate('products.toppings')
        res.status(200).json({message: 'Cart obtained correctly', ownCart})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
};

const getAllCarts = async (req, res) => {
    try {
        const allSoldCarts = await Cart.find({cartStatus : 'sold' }).populate('owner').populate('products.removed').populate('products.toppings')
        res.status(200).json({message: 'Carts obtained correctly', allSoldCarts})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
};


const deleteCart = async(req , res) =>{
    try {
        const {id} = req.params;
        const updatedCart = await Cart.findByIdAndUpdate(id, {cartStatus: 'deleted'}, {new: true})
        res.status(200).json({message: 'Cart deleted correctly', updatedCart})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

const buyCart = async(req , res) =>{
    try {
        const {id} = req.params;
        const updatedCart = await Cart.findByIdAndUpdate(id, {cartStatus: 'sold'}, {new: true})
        res.status(200).json({message: 'Cart sold correctly', updatedCart})
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
    }
}

module.exports = {
    createCart,
    getCart,
    deleteCart,
    buyCart,
    getAllCarts,
}
