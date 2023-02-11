const { makeAdminManagerService } = require("../services/admin.service");

module.exports.makeAdminManager = async(req,res)=>{
    try{
       const {email} = req.body;
       if(!email){
        return res.status(401).json({
            message:`can not find this user ${email}`
        })
       }
       const admin = await makeAdminManagerService(email,req.body);
       
       res.status(200).json({
        message:"you r success to make admin or manager ",
        result:admin
       })
    }   
    catch(error){
        res.status(500).json({
            message:"can not allow u to make admin or password",
            error:error.message
        })
    }
}