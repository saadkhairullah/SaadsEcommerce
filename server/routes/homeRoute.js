const express = require('express');
const UserInfo = require('../models/usermodel')
const {
    createUser,
    loginUser,
    getUsers,
    getUser,
    deleteUser,
    updateFirstName,
    updateLastName,
    updateEmail,
} = require('../controllers/userController')

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/Signup', createUser);

router.post('/Login', loginUser);

router.delete('/:id', deleteUser)

router.patch('/:id', updateFirstName)

router.patch('/:id', updateLastName)

router.patch('/:id', updateEmail)

module.exports = router;