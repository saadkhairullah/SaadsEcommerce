const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({

    FName: {
        type: String,
        required: true
    },
    
    LName: {
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