const { model, Schema, default: mongoose } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    detail: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, {
    versionKey: false
})

const Product = model('Product', ProductSchema);

module.exports = {
    Product,
    ProductSchema,
};
