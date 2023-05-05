const mongoose = require("mongoose");

///// collection inputs structure
const info = mongoose.Schema({
        firstname : {
            type: String,
            require:true,
        },
        lastname:{
            type : String,
            require:true
        },

        age:{
            type: Number,
            require:true
        },

        email:{
            type: String,
            require:true
        },
        timestamp:{
            type: Date,
            require:true
        }

});
////////////// MangoDB collection name and info submitted
const People = mongoose.model("Persons" , info);

module.exports = People;