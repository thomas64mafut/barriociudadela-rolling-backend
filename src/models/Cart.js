const { Schema, default: mongoose } = require("mongoose");


const CartSchema = new Schema ({
    owner: {
        type: mongoose.Schema.types.ObjetId,
        ref: 'User'
    },
    products: [
        {
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
            ],
            _id: false
        }
    ]
},{
    versionKey: false
}
)

    const Cart = model('Cart', CartSchema);

module.exports= Cart;