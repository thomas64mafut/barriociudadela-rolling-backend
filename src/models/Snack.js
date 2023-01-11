const { model } = require('mongoose');
const extendSchema = require('mongoose-extend-schema');
const { ProductSchema } = require('./Product');

const SnackSchema = extendSchema(ProductSchema,{
    size: {
        type: String,
        default: 'm'
    }
},{
    versionKey: false
})

const Snack = model('Snack', SnackSchema);

module.exports = {
    Snack,
};
