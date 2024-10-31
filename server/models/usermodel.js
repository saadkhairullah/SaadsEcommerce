const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({

    fName: {
        type: String,
        required: true
    },
    
    lName: {
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