const  adminController  = require("../controller/admin.Controller");
const { verifyAdmin } = require("../middleware/verifyAdmin");
const { veryfitoken } = require("../middleware/verifytoken");
const router = require("express").Router();
router
.route("/admin")
.post(veryfitoken,verifyAdmin, adminController.makeAdminManager);
module.exports = router;