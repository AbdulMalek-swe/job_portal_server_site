const {
    signupService, findUserByEmail, findUserByToken
} = require("../services/user.service");
const { sendMailWithGmail } = require("../utils/confirmGmail");
const generateToken = require("../utils/generateToken");

exports.userSign = async (req, res) => {
    try {
        const user = await signupService(req.body);
        const token = user.generateConfirmationToken();
        // const token = "abdulmalek sarkar"
        await user.save({ validateBeforeSave: false });
        const mailData = {
            to: [user.email],
            subject: "veryfy your token",
            text: `thank u for confirm account : ${req.protocol
                }://${req.get("host")}${req.originalUrl}/confirmation/${token}`
        }
        await sendMailWithGmail(mailData)
        res.status(200).json({
            message: "sign  ",
            user: user
        })
    }
    catch (error) {
        console.log(error.message)
        res.status(401).json({
            message: "can't possible signup",
            error: error.message
        })
    }
}
exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email | !password) {
            return res.status(401).json({
                message: email ? "enter password please" : "enter email please"
            })
        }
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(401).json({
                message: "can not find user"
            })
        }
        const isValidPassword = user.comparePassword(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({
                message: "password is mismatch"
            })
        }
        if (user.status == "inactive" | user.status == "blocked") {
            return res.status(401).json({
                message: user.status == 'inactive' ? "pleae contact manger to active your account" : "your acount is blocked please open new account using new gmail"
            })
        }
        const token = await generateToken(user);
        const { password: pwd, ...oneUser } = user.toObject();
        res.status(200).json({
            message: "login successfull",
            user: oneUser,
            token: token
        })
    }
    catch (error) {
        res.status(401).json({
            message: "can't possible signup",
            error: error.message
        })
    }
}
exports.getMe = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await findUserByEmail(email);
        const { password: pwd, ...profile } = user.toObject()
        res.status(200).json({
            message: "login successfull",
            user: profile
        })
    }
    catch (error) {
        res.status(401).json({
            message: "can't possible signup",
            error: error.message
        })
    }
}
exports.confirmationMail = async (req, res) => {
    try {
        const { token } = req.params;
        const user = await findUserByToken(token);
        if (!user) {
            return res.status(403).json({
                message: "invalid token "

            })
        }
        const expired = new Date > new Date(user.confirmationTokenExpires);
        if (expired) {
            return res.status(403).json({
                message: "token is expired "

            })
        }
        user.status = "active",
            user.confirmationToken = undefined;
        user.confirmationTokenExpires = undefined;
        user.status = "active",

            user.save({ validateBeforeSave: false });
        res.status(200).json({
            message: "confirmation is successfull",
            user: user
        })

    }
    catch (error) {
        res.status(401).json({
            message: "can't confirm mail",
            error: error.message
        })
    }
}