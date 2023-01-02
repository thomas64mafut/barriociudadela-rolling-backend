const { model, Schema, default: mongoose } = require('mongoose');

const UserSchema = new Schema ({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    profilePicture: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
}, {
    versionKey: false
})

const User = model('User', UserSchema);

module.exports = User; 