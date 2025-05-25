const express = require('express');

const router = express.Router();


router.get("/", (req,res)=>  {
    res.json({about: "about"});
});

module.exports = router;