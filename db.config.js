const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
  mongoose.connect(
    "mongodb+srv://daniel:hidaniel@cluster0.giaa7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("error connecting to db" + err);
      } else {
        console.log("connect to db");
      }
    }
  );
};
