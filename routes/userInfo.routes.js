const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { veryfitoken } = require("../middleware/verifytoken");
router
    .post("/sign",userController.userSign)
    .post("/login",userController.userLogin)
    .get("/me",veryfitoken, userController.getMe)
    .get("/sign/confirmation/:token", userController.confirmationMail)
module.exports = router;    