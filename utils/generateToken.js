const jwt = require("jsonwebtoken")
module.exports= (userInfo)=>{
   const token = jwt.sign({
        email:userInfo.email,
       role:userInfo.role
    },process.env.SECRET_JWT_TOKEN,{
       expiresIn:"4d" 
    })
    return token;
}