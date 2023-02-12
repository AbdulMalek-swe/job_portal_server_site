const  mongoose   = require("mongoose");
const validator = require("validator");
const CandidateSchema = mongoose.Schema({
     firstName:{
        type:String,
        required:[true,"need a first name"]
     },
     lastName:{
        type:String,
        required:[true,"need a last name"]
     },
  email: {
    type: String,
    validate: [validator.isEmail, "Provide a valid Email"],
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
  },
  gender: {
    type: String,
    required:"true",
     enum:["male","female","others"]
  },
  country:{
    type:String,
    required:[true,"provide a country name"]
  },
  postcode:{
    type:String,
    required:[true,"provide a postal code"]
  },
  address:{
    type:String,
    required:[true,"please provide your address"]
  },
  city:{
    type:String,
    required:[true,"provide a city name"]
  }
 
},
{
  timestamps: true,
}
);
 
 
const Candidate = mongoose.model("Candidate",CandidateSchema);
module.exports = Candidate;