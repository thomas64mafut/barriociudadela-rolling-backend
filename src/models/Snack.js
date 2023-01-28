const { model, default: mongoose } = require('mongoose');
const extendSchema = require('mongoose-extend-schema');
const { ProductSchema } = require('./Product');

const SnackSchema = extendSchema(ProductSchema,{
    ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient'
        },
    ],
    isVegan: {
        type: Boolean,
        default: false,
    },
},{
    versionKey: false
})

const Snack = model('Snack', SnackSchema);

module.exports = {
    Snack,
};
