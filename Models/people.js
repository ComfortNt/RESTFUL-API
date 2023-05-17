const mongoose = require("mongoose");

///// collection inputs structure
const GoalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            require:[true , "please Enter a text value"]
        }
    },  
{
        timestamps:true
}
);
////////////// MangoDB collection name and info submitted
const People = mongoose.model("Goals" , GoalSchema);

module.exports = People;