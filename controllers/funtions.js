
const People = require("../Models/people");
const User = require('../Models/newUser');
const asyncHandler = require('express-async-handler')



const Read  = asyncHandler(async(req,res) =>{
        const readpeople = await People.find({ user:req.user.id});
        res.status(200).json(readpeople);
   
});
////////////////////////////////////////////////////////////////////////
const Create = asyncHandler(async(req,res) =>{

    if(!req.body.text){
        res.status(405)
        throw new Error ("Please Add text Field");
    };

        const humans = await People.create({
            text: req.body.text,
            user: req.user.id,
        });
            res.status(200).json(humans);
    
}) 
 
///////////////////////////////////////////////////////////////////////////
const Updates = asyncHandler(async(req,res)=>{

        const updateperson = await People.findById(req.params.id);
      

        if(!updateperson){
            res.status(400)
            throw new Error ("You are not authorized to update this user")
        };

        if(!req.user){
            res.status(401)
            throw new Error ("User Not Found");
        }

        if (updateperson.user.toString() !== req.user.id) {
            res.status(401)
            throw new Error('User not authorized')
          }

        const updatepersonal = await People.findByIdAndUpdate(req.params.id , req.body , {
            new:true,
        });
        res.status(200).json({updatepersonal});
        
        
 });

 ///////////////////////////////////////////////////////////////////////////
const Deletes = asyncHandler(async(req,res)=>{

    const deletepersons = await People.findById(req.params.id);
      

    if(!deletepersons){
        res.status(400)
        throw new Error ("User not found")
    };
    // Check for user
    if(!req.user){
        res.status(401)
        throw new Error ("User Not Found");
    }
    // Make sure the logged in user matches the goal user
    if (deletepersons.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
      }
    
      await People.findByIdAndDelete(req.params.id);
    
     res.status(200).json({"deleted ID":req.params.id});
     
});

///////////////////////////////////////////////////////////////////////////


module.exports = {Read, Create, Updates , Deletes}


// const deleteperson = await People.findByIdAndDelete(req.params.id);
//         if(!deleteperson){
//             res.status(404).json({message: "User Was Not found"})
//         }
//         res.status(200).json({"deleted ID":req.params.id});
     