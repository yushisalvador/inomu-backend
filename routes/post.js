const express = require("express");
const post_controller = require("../controllers/post_controller");

const router = express.Router();
const cors = require("cors");
router.use(cors());

require("dotenv").config({
  path: "../.env",
});

router.get("/", post_controller.getAllPosts);
router.post("/newpost", post_controller.createPost);
router.delete("/:id", post_controller.deletePost);

module.exports = router;
