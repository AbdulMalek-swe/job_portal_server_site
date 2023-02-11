module.exports.verifyAdmin =  async(req,res,next)=>{
    try{
     const role = req.user.role;
 
     if(role=='admin'){
         next()
     }
    }
    catch(error){
        console.log(error);
     res.status(403).json({
         message:"you are not admin"
     })
    }
}