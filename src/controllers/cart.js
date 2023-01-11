const Cart = require("../models/Cart");


const createCart = async(req,res) => {
    try {
        const cartFound = await Cart.findOne({owner: '63be41214108f8128df66295' })
        if(!cartFound){
            const payload = {
                products: [
                    req.body,
                ],
                owner: '63be41214108f8128df66295'
            }
            const cart = new Cart(payload);
            await cart.save();
            return res.status(200).json({message: 'Cart created correctly', payload});
        }
        const productFoundCart = cartFound.products?.find((cartItem)=> cartItem.name === req.body.name)
        if(productFoundCart){
            console.log(cartFound)
            const newProductsList = cartFound.products?.map((cartItem)=>{
                if (cartItem.name !== req.body.name) return cartItem
                return req.body;
            });
            const cartUpdate = await Cart.findByIdAndUpdate(cartFound._id, {products : newProductsList} , {new:true})
            return res.status(200).json({message: 'Cart updated correctly', cartUpdate});
        }

    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    }
}


module.exports = {
    createCart
}