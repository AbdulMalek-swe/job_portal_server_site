const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { veryfitoken } = require("../middleware/verifytoken");
router
    .post("/sign",userController.userSign)
    .post("/login",userController.userLogin)
    .post("/me",veryfitoken, userController.getMe)
module.exports = router;    