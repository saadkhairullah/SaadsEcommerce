const express = require('express');

const router = express.Router();

router.get("/", (req,res)=>  {
    res.json({Names:"hamza, saad, amro"});
});

module.exports = router;