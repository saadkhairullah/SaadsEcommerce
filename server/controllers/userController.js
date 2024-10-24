const UserInfo = require('../models/usermodel')
const mongoose = require('mongoose')


//create a new user
const createUser = async (req, res) =>{
    const {Username, Email} = req.body

    //add user to db
    try {
        const user = await UserInfo.create({Username, Email})
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

module.exports = {
    createUser,
    getUsers,
    getUser,
}