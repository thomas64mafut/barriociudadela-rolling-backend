const { Schema, default: mongoose, model } = require("mongoose");

const CartSchema = new Schema ({
    owner: {
        type: String
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
            _id: false
        }
    ]
},{
    versionKey: false
}
)

    const Cart = model('Cart', CartSchema);

module.exports= Cart;