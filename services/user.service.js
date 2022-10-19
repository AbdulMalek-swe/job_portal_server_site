const User = require("../model/User")

module.exports.signupService =async(userData)=>{
    const user =await User.create(userData);
    return user;    
}
module.exports.findUserByEmail = async(email)=>{
          const user = await User.findOne({email:email})
          return user;
}
module.exports.findUserByToken =async(token)=>{
    console.log(token)
    const user = await User.findOne({confirmationToken : token})
    return user;
}