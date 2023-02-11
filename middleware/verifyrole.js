module.exports.verifyrole =  async(req,res,next)=>{
       try{
        const role = req.user.role;
        if(role=='admin'|role=='manager'){
            next()
        }
       }
       catch(error){
        res.status(403).json({
            message:"you are not admin or manager"
        })
       }
}