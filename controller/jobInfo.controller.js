const {
    createJobInfoService,
    getJobInfoService,
    getJobInfoServiceById,
    updateJobInfoServiceById 
} = require("../services/jobInfo.service");
// getting job 
module.exports.getJobInfo = async (req, res) => {
    try {
         console.log(req.user);
        const result = await getJobInfoService(req.user)
        res.status(200).json({
            message: "successfully get data",
            data: result
        })
    }
    catch (error) {
        console.log(error.message),
            res.status(500).json({
                message: "can not data",
                error: error.message
            })
    }
}
// create jobInfo 
module.exports.createJobInfo = async (req, res) => {
    try {
        const getInfo = req.body;
        const result = await createJobInfoService(getInfo);
        res.status(200).json({
            message: "successfully added data",
            data: result
        })
    }
    catch (error) {
        console.log(error.message),
            res.status(500).json({
                message: "error not create data",
                error: error.message
            }) 
    }
}
// get data using id 
module.exports.getJobInfoById = async (req, res) => {
    try {
        const id = req.params.id;
        
        const result = await getJobInfoServiceById(id);
        res.status(200).json({
            message: "successfully added data",
            data: result
        })
    }
    catch (error) {
        console.log(error.message),
            res.status(500).json({
                message: "error not create data",
                error: error.message
            }) 
    }
}
module.exports.updateJobInfoById =async(req,res,next)=>{
    try {
        const id = req.params.id;
        const result = await updateJobInfoServiceById(id,req.body);
        res.status(200).json({
            message: "successfully update data",
            data: result
        })
    }
    catch (error) {
        console.log(error.message),
            res.status(500).json({
                message: "can not update data",
                error: error.message
            }) 
    }
}