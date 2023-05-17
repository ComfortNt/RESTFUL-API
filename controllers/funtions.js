
 const People = require("../Models/people");
const asyncHandler = require('express-async-handler')





const Read  = asyncHandler(async(req,res) =>{

        const readpeople = await People.find({});
        res.status(200).json(readpeople);
   
});
////////////////////////////////////////////////////////////////////////
const Create = asyncHandler(async(req,res) =>{

      const  humans = await People.create(req.body);
            res.status(201).json(People);

}) 

///////////////////////////////////////////////////////////////////////////
const Updates = asyncHandler(async(req,res)=>{
  
        const {id} = req.params;
        const updateperson = await People.findByIdAndUpdate(id , req.body);
        if(!updateperson){
            res.status(404).json({message: "User Was Not found"})
        };
        res.status(200).json(updateperson);
        
 });

 ///////////////////////////////////////////////////////////////////////////
const Deletes =asyncHandler (async(req,res)=>{
   
        const {id} = req.params;
        const deleteperson = await People.findByIdAndDelete(id);
        if(!deleteperson){
            res.status(404).json({message: "User Was Not found"})
        };
        res.status(200).json(deleteperson);
     
});

module.exports = {Read, Create, Updates , Deletes}