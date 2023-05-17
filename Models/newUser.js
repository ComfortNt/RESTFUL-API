const mongoogse = require('mongoose'); 


const newUserSchema = new mongoogse.Schema({

    name:{
        type:String,
        required:[true,"Please Enter your Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter your Email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter your Password"]
    }
},{
    timestamps:true
});

const User = mongoogse.model('User', newUserSchema);

module.exports = User;