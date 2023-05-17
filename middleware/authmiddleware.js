const jwt = require('jsonwebtoken');
const asynchandler = require('express-async-handler');

const User = require('../Models/newUser');


const Secure = asynchandler(async(req , res , next)=>{

    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from headers
            token = req.headers.authorization.split(' ')[1];
            // Verify token
            const decoded = jwt.verify(token , process.env.JWT_SECRET);
            // Set user in req
            req.user = await User.findById(decoded.id).select("-password");

            next()
        } catch (error) {   
        console.log(error)
        res.status(400)
        throw Error(" Not Authorized")
        }
    }

    if(!token){
        res.status(400);
        throw Error(" Not Authorized , no token")
    }

})

module.exports = {Secure};