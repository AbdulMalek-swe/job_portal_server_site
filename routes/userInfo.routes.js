const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
router
    .route("/sign")
    .post(userController.userSign)
router
    .route("/login")
    .post(userController.userLogin)
module.exports = router;    