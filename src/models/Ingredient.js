const {model , Schema} = require('mongoose');

const IngredientSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    
    category: {
        type: String
    },

    isDeleted: {
        type: Boolean,
        default: false
    },
},{
    versionKey: false
})

const Ingredient = model('Ingredient', IngredientSchema);

module.exports= Ingredient;