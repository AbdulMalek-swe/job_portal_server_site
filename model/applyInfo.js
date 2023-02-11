const { default: mongoose, model } = require("mongoose");
const { ObjectId }= mongoose.Schema.Types
const validator= require("validator");

const applySchema = mongoose.Schema({
    jobApplyId:{
        type:ObjectId,
        // required:ObjectId,
    },
    name:{
        type:String,
        // required:true,
        trim:true,
    },
    resume:{
        type:String,
        // required:true,
        // validate:[validator.isURL,"invalid url "]
    },
    applyDate:{
        type:Date
    }
},
{
    timestamps:true
})
 

const ApplyJob = new model("ApplyJob",applySchema);
module.exports = ApplyJob

