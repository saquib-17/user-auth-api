// models/user.js
// User model definition using Mongoose
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type : String,
        required : true,
        unique : true,  
    },
    password : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now
    },

});

// Create the User model
let userModel = mongoose.model('User', userSchema);

// Export the model
module.exports = userModel;