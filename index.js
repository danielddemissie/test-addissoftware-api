const express = require("express");
const cors = require("cors");
require("dotenv").config();
const conn = require("./db.config");
const userRoute = require("./route");
const path = require("path");

const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/", router);
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  conn();
  console.log(`app running on port ${PORT}...`);
});
