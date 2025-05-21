const UserInfo = require('../models/usermodel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRETSTRING, {expiresIn: '7d'})
}
const loginUser = async (req, res) => {
    const {Email, Password} = req.body

    if(!Email||!Password){

        throw Error('All fields must be filled out')
    }

    //add user to db
    try {
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

        res.status(200).json({Email, token})}
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
//create a new user
const createUser = async (req, res) =>{
    const {FName,LName, Email, Password} = req.body

    //add user to db
    try {
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

        res.status(200).json({FName, LName, Email, Password: hash, token})
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
const updateFirstName = async (req, res) => {
    const { id } = req.params // pass in the id of the user
    const {FName} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found with that First Name!'})
    }

    const user = await UserInfo.findOneAndUpdate({_id: id}, {FName: FName})

    if(!user){
        return res.status(404).json({error: 'No User Found with that First Name!'})
    }
    res.status(200).json(user)
}

const updateLastName = async (req, res) => {
    const { id } = req.params // pass in the id of the user
    const {LName} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found with that Last Name!'})
    }

    const user = await UserInfo.findOneAndUpdate({_id: id}, {LName: LName})

    if(!user){
        return res.status(404).json({error: 'No User Found with that Last Name!'})
    }
    res.status(200).json(user)
}

const updateEmail = async (req, res) => {
    const { id } = req.params
    const {Email} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found with that Email!'})
    }

    const user = await UserInfo.findOneAndUpdate({_id: id}, {Email: Email})

    if(!user){
        return res.status(404).json({error: 'No User Found with that Email!'})
    }
    res.status(200).json(user)
}


module.exports = {
    createUser,
    loginUser,
    getUsers,
    getUser,
    updateFirstName,
    updateLastName,
    deleteUser,
    updateEmail,
}