const express = require("express");
const config = require("../knexfile");
const knex = require("knex")(config);

const router = express.Router();
const cors = require("cors");
const res = require("express/lib/response");
router.use(cors());

require("dotenv").config({
  path: "../.env",
});

router.get("/", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const data = await knex.select("*").from("posts");
  res.status(200).send(data);
});

router.post("/newpost", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  const postObj = {
    username: req.body.username,
    image: req.body.image,
    cocktail_name: req.body.cocktail_name,
    description: req.body.description,
    recipe: req.body.recipe,
  };
  console.log("saving", postObj);
  await knex("posts").insert(postObj);
});

module.exports = router;
