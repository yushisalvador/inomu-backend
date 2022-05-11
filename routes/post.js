const express = require("express");
const config = require("../knexfile");
const knex = require("knex")(config);

const router = express.Router();
const cors = require("cors");
router.use(cors());

require("dotenv").config({
  path: "../.env",
});

router.get("/", async (req, res) => {
  const data = await knex.select("*").from("posts");
  res.status(200).send(data);
});

module.exports = router;
