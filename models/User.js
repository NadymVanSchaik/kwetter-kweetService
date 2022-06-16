const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    kweetCounter: Number,
})

module.exports = mongoose.model('User', UserSchema)