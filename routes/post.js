const express = require("express");
const knex = require("knex");
const router = express.Router();
const cors = require("cors");
router.use(cors());

require("dotenv").config({
  path: "../.env",
});

router.get("/", async (req, res) => {
  res.send("hello world!");
});

module.exports = router;
