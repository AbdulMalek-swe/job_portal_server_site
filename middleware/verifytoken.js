const  jwt = require("jsonwebtoken");
const {promisify }= require("util")
module.exports.veryfitoken = async (req, res, next) => {
    try {
         
        const token = req.headers.authorization.split(" ")[1];
        
      if(!token){
        res.status(403).json({
            message: "invalid token"
        })
      }
      const decode = await promisify(jwt.verify)(token,process.env.SECRET_JWT_TOKEN)
       req.user = decode;
      next()
    }
    catch (error) {
        console.log(error.message);
        res.status(403).json({
            message: "invalid authentication",
            error: error.message
        })
    }
}