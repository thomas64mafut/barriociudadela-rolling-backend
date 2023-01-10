const { model } = require('mongoose');
const extendSchema = require('mongoose-extend-schema');
const { ProductSchema }  = require('./Product');

const DrinkSchema = extendSchema(ProductSchema,{
    hasAlcohol: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        defaul: 'medium'
    },
},{
    versionKey: false
})

const Drink = model('Drink', DrinkSchema);

module.exports = {
    Drink,
};
