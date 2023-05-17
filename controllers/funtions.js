
const People = require("../Models/people");
const asyncHandler = require('express-async-handler')



const Read  = asyncHandler(async(req,res) =>{
        const readpeople = await People.find({});
        res.status(200).json(readpeople);
   
});
////////////////////////////////////////////////////////////////////////
const Create = asyncHandler(async(req,res) =>{

    if(!req.body.text){
        res.status(400).json({message: "Please Add text Field"})
    }else{
        const humans = await People.create(req.body);
            res.status(201).json(People);
    }
}) 
 
///////////////////////////////////////////////////////////////////////////
const Updates = asyncHandler(async(req,res)=>{

        const updateperson = await People.findByIdAndUpdate(req.params.id);
        if(!updateperson){
            res.status(404).json({message: "User Was Not found"})}

        const updatepersonal = await People.findByIdAndUpdate(req.params.id , req.body , {
            new:true,
        });
        res.status(200).json({updatepersonal});
        
        
 });

 ///////////////////////////////////////////////////////////////////////////
const Deletes = asyncHandler(async(req,res)=>{
   
        const deleteperson = await People.findByIdAndDelete(req.params.id);
        if(!deleteperson){
            res.status(404).json({message: "User Was Not found"})
        }
        res.status(200).json({"deleted ID":req.params.id});
     
});

module.exports = {Read, Create, Updates , Deletes}