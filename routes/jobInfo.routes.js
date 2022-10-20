const jobController = require("../controller/jobInfo.controller");
const { verifyrole } = require("../middleware/verifyrole");
const { veryfitoken } = require("../middleware/verifytoken");
const router = require("express").Router();
router
.route("/jobs")
.post(veryfitoken, jobController.createJobInfo)

router
.route("/manager/jobs")
.get(veryfitoken,verifyrole,jobController.getJobInfo)
router
.route("/manager/jobs/:id")
.get(jobController.getJobInfoById)
router
.route("/jobs/:id")
.patch(jobController.updateJobInfoById)
module.exports=router