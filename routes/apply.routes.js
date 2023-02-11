const express = require("express");
const router = express.Router();
const applyController = require("../controller/apply.controller");
 
router
    .post("/apply",applyController.createApply)
module.exports = router;    