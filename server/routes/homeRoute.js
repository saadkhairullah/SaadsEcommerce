const express = require('express');
const UserInfo = require('../models/usermodel')
const router = express.Router();

router.get("/", (req,res)=>  {
    res.json({Names:"hamza, saad, amro"});
});
router.post("/", async (req,res)=>  {
    const {Username, Email} = req.body
    try {
        const User = await UserInfo.create({Username, Email})
        res.status(200).json(User)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;