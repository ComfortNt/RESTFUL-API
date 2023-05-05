const express = require('express');
const app = express();
const path = require("path");

const port = process.env.PORT || 3500;

// const router = express.Router();



app.get( ("/"), (req,res) =>{

    res.send("heool")
});

app.listen(port, (req,res) => {
    console.log("HOOOOo")
})