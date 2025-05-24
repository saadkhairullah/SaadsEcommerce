const express = require('express');


const router = express.Router();


router.get("/about", (req,res)=>  {
    res.json({about: "about"});
});

module.exports = router;