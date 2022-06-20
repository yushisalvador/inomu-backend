const postModel = require("../model/post");

module.exports = {
  async getAllPosts(req, res) {
    const allPosts = await postModel.getAllPosts();
    res.send(allPosts);
  },

  async createPost(req, res) {
    const postObject = {
      username: req.body.username,
      image: req.body.image,
      cocktail_name: req.body.cocktail_name,
      description: req.body.description,
      recipe: req.body.recipe,
    };
    await postModel.createPost(postObject);
    res.status(200).send();
  },

  async deletePost(req, res) {
    const id = req.params.id;
    await postModel.deletePost(id);
    res.status(200).send();
  },
};
