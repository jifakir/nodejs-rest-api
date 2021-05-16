const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 6}
});



module.exports = mongoose.model('User', userSchema);