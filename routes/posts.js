const express = require("express");
const postController = require("../controllers/post_controller");

const router = express.Router();
const cors = require("cors");
router.use(cors());

require("dotenv").config({
  path: "../.env",
});

router.get("/", postController.getAllPosts);
router.post("/newpost", postController.createPost);
router.delete("/:id", postController.deletePost);

module.exports = router;
