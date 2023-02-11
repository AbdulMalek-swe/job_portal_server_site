const ApplyJob = require("../model/applyInfo");
const JobInfo = require("../model/JobInfo");
const { createApplyService } = require("../services/apply.service");
module.exports.createApply = async (req, res, next) => {
    try {
        const date = new Date(req.body.date);
        const result = await createApplyService(req.body)
        console.log(result.deadline, date)
        if (result.deadline < date) {
            return res.status(501).json({
                message: "time is over",
            })
        }
        res.status(503).json({
            data: result.result
        })
    }
    catch (error) {
        res.status(403).json({
            message: "you are not eligable for this job",
            error: error.message
        })
    }
}