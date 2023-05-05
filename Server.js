const express = require('express');
const app = express();
const mongoose = require('mongoose');
const People = require("./Models/people");


const port = process.env.PORT || 3500;

// const router = express.Router();
// const path = require("path");

//middleware ot sending jason
app.use(express.json());


//// READs Databse of people
app.get( ("/"), (req,res) =>{
    res.send("Server running")
});
app.get(("/post") , async (req,res) =>{
    try {
        const readpeople = await People.find({});
        res.status(200).json(readpeople)
    } catch (error) {
        console.log(error)
        res.status(500).json( {message : error.message})
    }    
});

//////// Dispalys Users By ID
app.get(("/post/:id") , async (req,res) =>{
    try{
        const {id} = req.params; 
        const readpeopleid = await People.findById(id);
        res.status(200).json(readpeopleid)
    } catch (error) {
        console.log(error)
        res.status(500).json( {message : error.message})
    }    
});
//////Submits User to Databse
app.post( ("/post") , async (req,res) =>{
    try{
      const  humans = await People.create(req.body);
            res.status(200).json(People);
    }catch(error){
        console.log(error)
        res.status(500).json({message:error.message});
    }
});

///////////////////// Updates
app.put( ("/post/:id") , async(req,res)=>{
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

//////deletes data
app.delete( ("/post/:id") , async(req,res)=>{
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

////connects to mongodb
mongoose.connect('mongodb+srv://Admin:bfKmwHEN9QWxrJJO@brunoapi.ugaxkgv.mongodb.net/?retryWrites=true&w=majority',)
.then(console.log("connected"))
.catch( (error=>{console.log(error)}));


app.listen(port, (req,res) => {
    console.log("Sever Running")
});
