const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    id:Schema.Types.ObjectId,
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    confirmPassword:{
        type: String,
        // required: true,
    },
    termsAndConditions:{
        type: Boolean,
        required: true
    },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel