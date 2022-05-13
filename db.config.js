const { connect } = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

module.exports = () => {
  connect(
    `${MONGODB_URL}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("error connecting to db");
      } else {
        console.log("connect to db");
      }
    }
  );
};
