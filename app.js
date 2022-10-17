const express = require("express");
const cors = require("cors");
const jobInfo = require("./routes/jobInfo.routes");
const userInfo = require("./routes/userInfo.routes");
const app = express();  
app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"welcome to my job portal",
        error:"you can't get any error message because u successfully connect database"
    })
}) 
app.use("/",jobInfo);
app.use("/",userInfo);
module.exports = app;