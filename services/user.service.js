const User = require("../model/User")

module.exports.signupService =async(userData)=>{
    const user =await User.create(userData);
    return user;    
}
module.exports.findUserByEmail = async(email)=>{
          const user = await User.findOne({email:email})
          return user;
}