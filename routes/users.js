const express = require("express");
const userController = require("../controllers/user_controller");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:username", userController.getUserByUserName);

module.exports = router;
