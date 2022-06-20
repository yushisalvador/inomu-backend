const config = require("../knexfile");
const knex = require("knex")(config);

const getAllUsers = () => {
  return knex
    .select({
      id: "id",
      username: "username",
      email: "email",
    })
    .from("users");
};

const getUserByUserName = (name) => {
  return knex
    .select({
      id: "id",
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
