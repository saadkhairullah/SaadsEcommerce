require('dotenv').config()
const express = require('express')
const app = express()

app.get("/server", (req,res)=>  {
    res.json({Names:"hamza, saad, amro"});
});

app.listen("8080", () =>{
console.log("server started on port 8080")
})

