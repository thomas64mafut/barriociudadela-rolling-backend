const { Schema, default: mongoose } = require("mongoose");


const CartSchema = new Schema ({
    name: {
        type: String
    },
    price:{
        type: Number
    },
    quantity: {
        type: Number
    },
    preferences: {
        type: String
    },
    removed: [
        {
            type: mongoose.Schema.types.ObjetId,
            ref: 'Ingredient'
        }
    ],
    toppings: [
        {
            type: mongoose.Schema.types.ObjetId,
            ref: 'Ingredient'
        }
    ]
})

    const Cart = model('Cart', CartSchema);

module.exports= Cart;