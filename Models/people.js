const mongoose = require("mongoose");

///// collection inputs structure
const GoalSchema = mongoose.Schema(
    {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
        text: {
          type: String,
          required: [true, 'Please add a text value'],
        },
      },
      {
        timestamps: true,
      }
);
////////////// MangoDB collection name and info submitted
const People = mongoose.model("Goals" , GoalSchema);

module.exports = People;