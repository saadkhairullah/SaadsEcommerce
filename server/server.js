require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const homeRoutes = require('./routes/homeRoute')
const aboutRoutes= require('./routes/aboutRoute')

app.use(express.json());

app.use(homeRoutes);
app.use(aboutRoutes);

mongoose.connect(process.env.MONGO_URL)
// listen to requests after connection to data base
    .then(()=>{
        app.listen(process.env.PORT, () =>{
            console.log("server started on port", process.env.PORT);
            });
    })
    .catch((error) =>{
        console.log(error)
    })


    
