const jobController = require("../controller/jobInfo.controller");
const router = require("express").Router();
router
.route("/jobs")
.post(jobController.createJobInfo)

router
.route("/manager/jobs")
.get(jobController.getJobInfo)
router
.route("/manager/jobs/:id")
.get(jobController.getJobInfoById)
router
.route("/jobs/:id")
.patch(jobController.updateJobInfoById)
module.exports=router