const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    FirstName: String,
    LastName: String,
    Gender: String,
    Age: Number,
    Height: Number,
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
