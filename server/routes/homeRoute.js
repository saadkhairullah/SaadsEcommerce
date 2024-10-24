const express = require('express');
const UserInfo = require('../models/usermodel')
const {
    createUser,
    getUsers,
    getUser,
} = require('../controllers/userController')

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

module.exports = router;