const { model, Schema } = require('mongoose');

const RoleSchema = new Schema ({
    name: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, {
    versionKey: false
})

const Role = model('Role', RoleSchema);

module.exports = Role; 