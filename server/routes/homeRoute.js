const express = require('express');
const UserInfo = require('../models/usermodel')
const requireAuth = require('../middleware/authMiddleware');

const {
    createUser,
    loginUser,
    getUsers
} = require('../controllers/userController')

const router = express.Router();

//non protected api routes
router.post('/Signup', createUser);

router.post('/Login', loginUser);

router.get('/',  getUsers);



module.exports = router;