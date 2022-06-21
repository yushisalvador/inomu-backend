const config = require("../knexfile");
const knex = require("knex")(config);

const getAllPosts = () => {
  return knex.select("*").from("posts");
};

const createPost = (post) => {
  return knex("posts").insert(post).catch(console.error());
};

const deletePost = (id) => {
  return knex("posts").where("id", id).del();
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
};
