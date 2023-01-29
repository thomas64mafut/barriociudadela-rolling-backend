const { Schema, default: mongoose, model } = require("mongoose");

const CartSchema = new Schema ({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cartStatus: {
        type: String,
        default: 'active'
    },
    boughtAt: 
        {
            type: Date,
        },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    products: [
        {
            idProduct: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Burger'
                },
            name: {
                type: String
                },
            price:{
                type: Number
                },
            quantity: {
                type: Number,
                default: 1
                },
            preferences: {
                type: String
                },
            removed: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Ingredient'
                }
                ],
            toppings: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Ingredient'
                }
                ],
            size:
                {
                    type: String,
                    default: 'medium'
                },
            _id: false
        }
    ],
},{
    versionKey: false
}
)

    const Cart = model('Cart', CartSchema);

module.exports= Cart;