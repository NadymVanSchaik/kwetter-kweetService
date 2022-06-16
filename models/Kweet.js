const mongoose = require('mongoose')

const KweetSchema = mongoose.Schema({
    userId: String,
    userName: String,
    text: String,
})

module.exports = mongoose.model('Kweet', KweetSchema)