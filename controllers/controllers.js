const express = require('express')
const router = express.Router();
const People = require("../Models/people");

const {Read , Create , Updates , Deletes} = require('./funtions');

//////main web page///////////////////////
router.get( ("/"), (req,res) =>{
    res.send("Server running")
});

//////get all people///////////////////////
router.get(("/read") , Read);


router.post( ("/submit") , Create);


//// updates user by ID/////
router.put( ("/post/:id") , Updates )


router.delete( ("/delete/:id") , Deletes);

module.exports = router;

