const mongoose = require("mongoose");
const validator = require("validator");
const enjoyerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "need a first name"]
  },
  lastName: {
    type: String,
    required: [true, "need a last name"]
  },
  email: {
    type: String,
   unique:false,
   index:false
  },
  gender: {
    type: String,
    required: "true",
    enum: ["male", "female", "others"]
  },
  country: {
    type: String,
  },
  companyName: { type: String },
  postcode: {
    type: String,

  },
  employeeRange: String,
  roleInCompany: String,
  address: {
    type: String,

  },
  city: {
    type: String,

  },
  companyCategory: String,
  role: {
    type: String,
    required: [true, "provide a role name"]
  }

},
  {
    timestamps: true,
  }
);


const enjoyer = mongoose.model("enjoyer", enjoyerSchema);
module.exports = enjoyer;