const UserInfo = require('../models/usermodel')
const mongoose = require('mongoose')


//create a new user
const createUser = async (req, res) =>{
    const {fName, Email} = req.body

    //add user to db
    try {
        const user = await UserInfo.create({fName, Email})
        res.status(200).json(user)
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
    const {fName} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found with that First Name!'})
    }

    const user = await UserInfo.findOneAndUpdate({_id: id}, {fName: fName})

    if(!user){
        return res.status(404).json({error: 'No User Found with that First Name!'})
    }
    res.status(200).json(user)
}

const updateLastName = async (req, res) => {
    const { id } = req.params // pass in the id of the user
    const {lName} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found with that Last Name!'})
    }

    const user = await UserInfo.findOneAndUpdate({_id: id}, {lName: lName})

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
    getUsers,
    getUser,
    updateFirstName,
    updateLastName,
    deleteUser,
    updateEmail,
}