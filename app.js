const express = require("express");
const cors = require("cors");
const jobInfo = require("./routes/jobInfo.routes");
const userInfo = require("./routes/userInfo.routes");
const admin = require("./routes/admin.routes");
const applyInfo = require("./routes/apply.routes");
const app = express();  
app.use(express.json());
app.use(cors())
app.use("/",jobInfo);
app.use("/",userInfo);
app.use('/',admin);
app.use("/",applyInfo)
module.exports = app;