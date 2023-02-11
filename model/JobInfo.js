const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validate = require("validator");
const jobInfoSchema = mongoose.Schema({
  name: {
    type: String,
    required: ["true", "provide a job name"],
    trim: true,
    lowercase: true
  },
  jobContext: {
    type: String,
    required: true
  },
  jobResponsibility: {
    type: String,
    required: true
  },
  vacancy: {
    type: String,
    required: true,
    default: "not space"
  },
  employmentStatus: {
    type: String,
    enum: {
      values: ["full-time", "part-time", "remote"],
      message: "please your status is wrong {VALUES} provide original value",
      default: "full-time"
    }
  },
  experience: {
    required: true,
    type: String,
    default: "no exprience"
  },

  gender: {
    type: String,
    default: "both male and female allowed to apply"
  },
  age: {
    type: String,
    required: true
  },
  description: String,
  managerId:{
    type:ObjectId,
    required:true
  },
  // candidateId: {
  //   resume: {
  //     type: String,
  //   },
  //   id: {
  //     type: ObjectId,
  //     ref: "cand"
  //   }
  // },
  jobLocation: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    default: "Negotiable"
  },
  jobSource: String,
  publishedOn: {
    type: Date,
    default: Date.now
  },
  deadline:{
    type:Date,
    required:true
  }
}, {
  timestamps: true
})
const JobInfo = mongoose.model("JobInfo", jobInfoSchema);
module.exports = JobInfo;  