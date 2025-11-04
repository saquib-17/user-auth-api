const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = process.env.mongo_url || 'mongodb://localhost:27017/auth';
const connectDb = mongoose.connect(dbURI, )
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));
module.exports = connectDb;
