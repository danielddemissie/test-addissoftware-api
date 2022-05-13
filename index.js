const express = require("express");
const cors = require("cors");
require("dotenv").config();
const conn = require("./db.config");
const userRoute = require("./route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  conn();
  console.log(`app running on port ${PORT}...`);
});
