const express = require('express');
const UserInfo = require('../models/usermodel')
const requireAuth = require('../middleware/authMiddleware');

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

// protected api routes
router.get('/:id',requireAuth, getUser);

router.delete('/:id', requireAuth, deleteUser)

router.patch('/:id',requireAuth, updateFirstName)

router.patch('/:id',requireAuth, updateLastName)

router.patch('/:id', requireAuth, updateEmail)

module.exports = router;