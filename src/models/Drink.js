const { model } = require('mongoose');
const extendSchema = require('mongoose-extend-schema');
const { ProductSchema }  = require('./Product');

const DrinkSchema = extendSchema(ProductSchema,{
    brand: {
        type: String,
    },
    hasAlcohol: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: '700ml'
    },
},{
    versionKey: false
})

const Drink = model('Drink', DrinkSchema);

module.exports = {
    Drink,
};
