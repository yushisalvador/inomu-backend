const userModel = require("../model/user");

module.exports = {
  async getAllUsers(req, res) {
    const allUsers = await userModel.getAllUsers();
    res.send(allUsers);
  },

  async getUserByUserName(req, res) {
    const username = req.params.name;
    const user = await userModel.getUserByUserName(username);
    res.send(user);
  },
};
