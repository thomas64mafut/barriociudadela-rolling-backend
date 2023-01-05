const {model , Schema, mongo, default: mongoose} = require('mongoose');

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
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Ingredient'
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
        type: Boolean,
        default: false
    },

    details: {
        type: String
    }
},{
    versionKey: false
})

const Product = model('Product', ProductSchema);

module.exports= Product;
