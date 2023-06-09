const express = require('express');
const app = express();
const mongoose = require('mongoose');
const People = require("./Models/people");
require('dotenv').config();
const route = require('./controllers/controllers');
const user = require('./controllers/authcontrol');

const port = process.env.PORT || 3500;

// const router = express.Router();
// const path = require("path");

//middleware for sending json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// imports all controller CRUD Routs....
app.use("/Api" , route);
app.use("/Auth" , user);


////connects to mongodb
mongoose.connect(process.env.MONGO,)
.then(console.log("connected"))
.catch( (error=>{console.log(error)}));


app.listen(port, (req,res) => {
    console.log("Sever Running")
});
