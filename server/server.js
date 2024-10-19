require('dotenv').config();
const express = require('express');
const app = express();
const homeRoutes = require('./routes/homeRoute')
const aboutRoutes= require('./routes/aboutRoute')

app.use(express.json());

app.use(homeRoutes);
app.use(aboutRoutes);

app.listen(process.env.PORT, () =>{
console.log("server started on port", process.env.PORT);
});

