require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const homeRoutes = require('./routes/homeRoute')
const aboutRoutes= require('./routes/aboutRoute')
const userSettingsRoutes = require('./routes/userSettingsRoute')
const cors = require('cors')

app.use(
    cors({origin: "http://localhost:5173", })
)

app.use(express.json());

app.use('/api/home', homeRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/userSettings', userSettingsRoutes);

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


    
