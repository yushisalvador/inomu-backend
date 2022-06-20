const express = require("express");
const user_controller = require("../controllers/user_controller");
const router = express.Router();

router.get("/", user_controller.getAllUsers);
router.get("/:username", user_controller.getUserByUserName);

module.exports = router;
