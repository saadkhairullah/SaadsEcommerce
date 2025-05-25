const express = require('express');
const UserInfo = require('../models/usermodel')
const requireAuth = require('../middleware/authMiddleware');

const {
    updateUser,
    getUser,
    deleteUser,

} = require('../controllers/userController')

const router = express.Router();

// protected api routes
router.get('/:id',requireAuth, getUser);

router.delete('/:id', requireAuth, deleteUser)

router.patch('/:id',requireAuth, updateUser)


module.exports = router;