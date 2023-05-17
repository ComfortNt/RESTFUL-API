const bcrypt = require('bcrypt');
const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const User = require('../Models/newUser');


const SignUp = asynchandler(async(req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error('please Complele All fields')
    };
    
    ///// if user exists
    const user_email = await User.findOne({email});
    if(user_email){
            res.status(400)
            throw new Error('User Already Exists')
        };

    /// hash password/
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    ///
    const hashed_user = await User.create({
        name,
        email,
        password:hashedPassword
    });

    if(hashed_user){

        res.status(201).json({
            _id : hashed_user._id , 
            name : hashed_user.name,
            email : hashed_user.email,
            token : token(hashed_user._id)
        })
    }else{
        res.status(500)
        throw new Error('Invalid User Data');
    };

});

const Login = asynchandler(async(req,res)=>{

   const {email , password} = req.body;
   
   const user = await User.findOne({email});

   if(user && (await bcrypt.compare(password ,user.password))){
    res.status(201).json({
        _id : user._id , 
        name : user.name,
        email : user.email,
        token : token(user._id)
    });
   }else{
    res.status(400)
    throw new Error('Invalid Data');
   };


});

const getUser = asynchandler(async(req,res)=>{

      const {_id ,name, email} = await User.findById(req.user.id);

      res.status(200).json({
        _id:_id,
        name:name,
        email:email
      })

});

///User Token/////
const token =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'2h'});
};


module.exports={
    SignUp,
    Login,
    getUser
};