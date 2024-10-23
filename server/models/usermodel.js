const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({

    Username: {
        type: String,
        required: true
    },

    Email:{
        type: String,
        required: true
    },

    NOofPurchases:{
        Type: Number,
    } }, {timestamps :true}
)

module.exports = mongoose.model('UserInfo', userSchema)