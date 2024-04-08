const mongoose = require('mongoose');

const igUserSchema = new mongoose.Schema({
    userName: String,
    password: String
});

module.exports = mongoose.model('igUser', igUserSchema)