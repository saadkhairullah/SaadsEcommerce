const UserInfo = require('../models/usermodel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRETSTRING, {expiresIn: '7d'})
}
const loginUser = async (req, res) => {
    const {Email, Password} = req.body

    //add user to db
    try {
        if(!Email||!Password){

        throw Error('All fields must be filled out')
    }
        const exists = await UserInfo.findOne({Email})
        
            // make sure email isnt already being used
            if (!exists)
            {
                throw Error('Email Is not signed up')
            }

            // incrypt password before creating user
            const match = await bcrypt.compare(Password, exists.Password)

            if (!match)
            {
                throw Error('incorrect password')
            }
            if (match){
        const token = createToken(exists._id)

        res.status(200).json({
                _id: exists._id,
                FName: exists.FName,
                LName: exists.LName,
                Email: exists.Email,
                token
            })
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
//create a new user
const createUser = async (req, res) =>{
    const {FName,LName, Email, Password} = req.body

    //add user to db
    try {

        //validate email and password
    if(!Email||!Password){
        throw Error('All fields must be filled out')
    }
    else if(!validator.isEmail(Email)){
        throw Error('Email Is not a valid Email')
    }
    else if(!validator.isStrongPassword(Password)){
        throw Error('Password not strong enough')
    }
        const exists = await UserInfo.findOne({Email})
        
            // make sure email isnt already being used
            if (exists){
                throw Error('Email Already Used')
            }
            

            // incrypt password before creating user

            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(Password, salt)
        
            const user = await UserInfo.create({FName, LName, Email, Password: hash})

            const token = createToken(user._id)

        res.status(200).json({
    _id: user._id,
    FName: user.FName,
    LName: user.LName,
    Email: user.Email,
    token
})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

//get all users in db
const getUsers = async (req, res)=>{
    const allUsers = await UserInfo.find({}).sort({createdAt: -1})

    res.status(200).json(allUsers)
} 

//get a single user form the db
const getUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found with that ID!'})
    }

    const user = await UserInfo.findById(id)

    if(!user){
        return res.status(404).json({error: 'No User Found with that ID!'})
    }
    res.status(200).json(user)
}

//delete a user 

const deleteUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found with that ID!'})
    }

    const user = await UserInfo.findOneAndDelete({_id: id})

    if(!user){
        return res.status(404).json({error: 'No User Found with that ID!'})
    }
    res.status(200).json(user)
}
//update a user name
const updateUser = async (req, res) => {
    const { id } = req.params
    const { FName, LName, Email } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found!'})
    }

    const updateFields = {}
    if (FName) updateFields.FName = FName
    if (LName) updateFields.LName = LName
    if (Email) updateFields.Email = Email

    const user = await UserInfo.findOneAndUpdate({_id: id}, updateFields, {new: true})

    if(!user){
        return res.status(404).json({error: 'No User Found!'})
    }
    res.status(200).json({
        _id: user._id,
        FName: user.FName,
        LName: user.LName,
        Email: user.Email,
        token: req.headers.authorization.split(' ')[1]
    })
}



module.exports = {
    createUser,
    loginUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}