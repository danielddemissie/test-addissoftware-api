const User = require('../models/User');
const { sendData } = require('../../utils');

module.exports = {
  addUser: async (req, res) => {
    try {
      const user = new User({
        ...req.body,
      });
      await user.save();
      sendData(res, user, 'user created');
    } catch (error) {
      sendData(res, null, 'error:' + error.message);
    }
  },
  getAllusers: async (req, res) => {
    try {
      const users = await User.find();
      sendData(res, users, 'all users');
    } catch (error) {
      sendData(res, null, 'error' + error.message);
    }
  },
  editUser: async (req, res) => {
    try {
      const { _id } = req.params;
      const oldUser = await User.findOne({
        _id,
      });

      if (oldUser) {
        if (req.body.FirstName) {
          oldUser.FirstName = req.body.FirstName;
        }
        if (req.body.LastName) {
          oldUser.LastName = req.body.LastName;
        }
        if (req.body.Gender) {
          oldUser.Gender = req.body.Gender;
        }
        if (req.body.Age) {
          oldUser.Age = req.body.Age;
        }
        if (req.body.Height) {
          oldUser.Height = req.body.Height;
        }
      }
      await oldUser.save();
      sendData(res, oldUser, 'user updated');
    } catch (error) {
      sendData(res, null, 'error: ' + error.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { _id } = req.params;
      const user = await User.find({
        _id,
      });

      if (user) {
        await User.deleteOne({
          _id,
        });
        return sendData(res, null, 'user deleted');
      }
    } catch (error) {
      sendData(res, null, 'error:' + error.message);
    }
  },
};
