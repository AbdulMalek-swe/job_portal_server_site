const express = require("express");
const cors = require("cors");
const jobInfo = require("./routes/jobInfo.routes");
const app = express();  
app.use(express.json());
app.use(cors())
app.use("/",jobInfo);
module.exports = app;