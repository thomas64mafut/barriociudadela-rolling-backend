const { model, Schema } = require('mongoose');

const RoleSchema = new Schema ({
    name: {
        type: String,
    }
}, {
    versionKey: false
})

const Role = model('Role', RoleSchema);

module.exports = Role; 