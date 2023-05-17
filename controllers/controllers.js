const express = require('express')
const router = express.Router();
const People = require("../Models/people");

const {Read , Create , Updates , Deletes} = require('./funtions');

const {Secure} = require('../middleware/authmiddleware');
//////main web page///////////////////////
router.get( ("/"), (req,res) =>{
    res.send("Server running")
});

//////get all people///////////////////////
router.get(("/read") , Secure ,Read);

router.post( ("/submit"), Secure , Create);

//// updates user by ID/////
router.put( ("/post/:id"), Secure, Updates);

router.delete( ("/delete/:id"), Secure , Deletes);

module.exports = router;

