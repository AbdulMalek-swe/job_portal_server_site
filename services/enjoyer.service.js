const enjoyer = require("../model/enjoyer");

module.exports.postEnjoyerService = async(data)=>{
     
    const result = await enjoyer(data).save()
    return result;
}