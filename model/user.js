const config = require("../knexfile");
const knex = require("knex")(config);

const getAllUsers = () => {
  return knex
    .select({
      user_id: "user_id",
      username: "username",
      email: "email",
    })
    .from("users");
};

const getUserByUserName = (name) => {
  return knex
    .select({
      user_id: "user_id",
      email: "email",
      username: "username",
    })
    .from("users")
    .where({ username: name })
    .first();
};

module.exports = {
  getAllUsers,
  getUserByUserName,
};
