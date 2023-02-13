const express = require("express");
const router = express.Router();
const enjoyerController = require("../controller/enjoyer.controller");
 
router
    .post("/enjoyer",enjoyerController.postEnjoyer)
module.exports = router;    