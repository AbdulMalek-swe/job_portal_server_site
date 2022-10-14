const JobInfo = require("../model/jobInfo");

module.exports.getJobInfoService =async()=>{
    const result =await JobInfo.find({});
    return result;
}
module.exports.createJobInfoService =async(data)=>{
    const result =await JobInfo.create(data);
    return result;
}
// get service using id 
module.exports.getJobInfoServiceById =async(jobId)=>{
    const result =await JobInfo.find({_id:jobId});
    return result;
}
module.exports.updateJobInfoServiceById =async(jobId,jobInformation)=>{
    const result = await JobInfo.updateOne({_id:jobId},jobInformation,{
        runValidators:true
    })
    return result;
}
