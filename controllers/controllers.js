const express = require('express')
const router = express.Router();
const People = require("../Models/people");

///// My first try at implementing MVC//////// 2022/05/05//// :)/

//////main web page///////////////////////
router.get( ("/"), (req,res) =>{
    res.send("Server running")
});


//// READs Databse of people/////////////////////////////////////////////////////////////////
router.get(("/read") , async (req,res) =>{
    try {
        const readpeople = await People.find({});
        res.status(200).json(readpeople);
    } catch (error) {
        console.log(error);
        res.status(500).json( {message : error.message})
    }    
});
//////////////////////////////////////////////////////////////////////////////////////////


//////Submits User to Databse///////////////////////////////////////////////////////////
router.post( ("/submit") , async (req,res) =>{
    try{
      const  humans = await People.create(req.body);
            res.status(201).json(People);
    }catch(error){
        console.log(error)
        res.status(500).json({message:error.message});
    }
});
//////////////////////////////////////////////////////////////////////////////////////////
/////Gets user by Id
router.get(("/user/:id") , async (req,res) =>{
    try{
        const {id} = req.params; 
        const readpeopleid = await People.findById(id);
        res.status(200).json(readpeopleid)
    } catch (error) {
        console.log(error)
        res.status(500).json( {message : error.message})
    }    
});
//////////////////////////////////////////////////////////////////////////////////////////

//// updates user by ID/////
router.put( ("/post/:id") , async(req,res)=>{
    try{
        const {id} = req.params;
        const updateperson = await People.findByIdAndUpdate(id , req.body);
        if(!updateperson){
            res.status(404).json({message: "User Was Not found"})
        };
        res.status(200).json(updateperson);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
    }
 } )
/////////////////////////////////////////////////////////////////////////////////////////////

router.delete( ("/delete/:id") , async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteperson = await People.findByIdAndDelete(id);
        if(!deleteperson){
            res.status(404).json({message: "User Was Not found"})
        };
        res.status(200).json(deleteperson);
     
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
    }
} )

module.exports = router;

