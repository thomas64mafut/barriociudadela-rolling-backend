

const createCartValidations = async(req, res, next ) => {
    try {
        const {name, price, size, quantity} = req.body;
        if (!name || ! price || !size || !quantity) return res.status(400).json({message: 'Important information about products is missing'})
        next();
    } catch (error) {
        return res.status(error.code || 500).json({message : error.message})
    }

}

module.exports ={
    createCartValidations
}