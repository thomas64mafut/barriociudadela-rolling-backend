const { model, Schema, default: mongoose } = require('mongoose');

const UserSchema = new Schema ({
    username: {
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
        default: 'empty'
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        default: '63b750d9df706678b4bf105c',
    },
}, {
    versionKey: false
})

const User = model('User', UserSchema);

module.exports = User; 