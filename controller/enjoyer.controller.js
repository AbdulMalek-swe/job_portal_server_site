const {
    postEnjoyerService
} = require("../services/enjoyer.service");


exports.postEnjoyer = async (req, res) => {
    try {
        const data = req.body
        const result = await postEnjoyerService(data);
       
        res.status(200).json({
            message: "post user successfully",
            result: result
        })
    }
    catch (error) {
        console.log(error.message);
        res.status(401).json({
            message: "can't possible signup",
            error: error.message
        })
    }
}