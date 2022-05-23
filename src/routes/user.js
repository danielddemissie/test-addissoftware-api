const { Router } = require('express');
const {
  addUser,
  getAllusers,
  editUser,
  deleteUser,
} = require('../controllers/user');
const route = Router();
const path = require('path');

const defaultRoute = route.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
const userRoute = route
  .post('/add', addUser)
  .get('/all', getAllusers)
  .put('/edit/:_id', editUser)
  .delete('/delete/:_id', deleteUser);
module.exports = {
  defaultRoute,
  userRoute,
};
