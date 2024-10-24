const express = require('express');
const UserInfo = require('../models/usermodel')
const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUserName,
    updateEmail,
} = require('../controllers/userController')

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.delete('/:id', deleteUser)

router.patch('/:id', updateUserName)

router.patch('/:id', updateEmail)

module.exports = router;