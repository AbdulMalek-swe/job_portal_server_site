const ApplyJob = require("../model/applyInfo");
const JobInfo = require("../model/JobInfo");

exports.createApplyService =async (applyData )=>{

    const {deadline}= await JobInfo.findOne({_id:applyData.id})
    const result = await ApplyJob.create(applyData);
    return {
        result,
        deadline
    }
}