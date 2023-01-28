const { model, Schema, default: mongoose } = require('mongoose');

const ProductSchema = new Schema({
    name: {
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
    size: {
        type: String,
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
