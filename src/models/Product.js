const {model , Schema} = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    },
    
    ingredients: [
            {
                type: String
            },
    ],
    
    toppings: [
        {
            type: String   
        }
    ],

    size: {
        type: String,
        default: "medium"
    },

    image: {
        type: String
    },

    category: {
        type: String
    },

    isDeleted: {
        type: Boolean
    },

    details: {
        type: String
    }
})

const Product = model('Product', ProductSchema);

module.exports= Product;
