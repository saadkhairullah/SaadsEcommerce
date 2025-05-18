const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

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
// old code i might reuse
// userSchema.statics.signup = async (FName, LName, Email, Password) => {
//     const exists = await this.findOne({Email})

//     if (exists){
//         throw Error('Email Already Used')
//     }
//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(Password, salt)

//     const User = await this.create({FName, LName, Email, Password: hash})

//     return User
// }


module.exports = mongoose.model('UserInfo', userSchema)