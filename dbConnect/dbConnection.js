const { default: mongoose } = require("mongoose");

module.exports.dbConnect = () => {
    mongoose
        .connect(process.env.MONGOOSE_DB_CONNECTION)
        .then(res => console.log("database successfully connected".cyan))
        .catch(error => console.log(error.message))
}