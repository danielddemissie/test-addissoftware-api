const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose.connect(
    `${MONGODB_URL}`,
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
