const User = require("../model/User")

module.exports.makeAdminManagerService = async(email,role)=>{
    console.log(role,email);
    const result = await User.updateOne({email:email},role,{
          runValidators : true
    })
    return result;
}