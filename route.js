const { Router } = require("express");
const { addUser, getAllusers, editUser, deleteUser } = require("./controller");
const route = Router();
const defaultRoute = route.get("/", (req, res) => {
  res.send({
    message: "test addissoftware api",
  });
});
const userRoute = route
  .post("/add", addUser)
  .get("/all", getAllusers)
  .put("/edit/:_id", editUser)
  .delete("/delete/:_id", deleteUser);
module.exports = {
  defaultRoute,
  userRoute,
};
