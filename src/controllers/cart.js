const {Cart} = require('./../models/Cart')

const createCart = async(req,res) => {
    res.send('hola');
   /*  try {
        const cartFound = await Cart.findOne({owner : '63be41214108f8128df66295'})
        if(!cartFound){
            const payload = {
                products: [
                    req.body,
                ],
                owner: '63be41214108f8128df66295'
            }
        }
        res.status(200).json({message: 'Cart created correctly'});
    } catch (error) {
        res.status(error.code || 500).json({message : error.message})
        
    } */
}


module.exports = {
    createCart
}