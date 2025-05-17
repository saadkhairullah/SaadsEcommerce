const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({

    FName: {
        type: String
    },
    
    LName: {
        type: String
    },

    Email:{
        type: String,
        required: true,
        unique: true
    },

    Password: {
        type: String,
        required: true
    },

    NOofPurchases:{
        Type: Number,
    } }, {timestamps :true}
)

module.exports = mongoose.model('UserInfo', userSchema)