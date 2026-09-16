const express = require("express");
const userController = require("../Controller/userController");

const router = express.Router();

router.get("/users", userController.getUsers);

module.exports = router;
