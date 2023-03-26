const { HttpError, sendEmail } = require('../../helpers');
const {User} = require("../../models/user");
require("dotenv").config();

const {BASE_URL} = process.env;

const resendVerifyEmail = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});

    if(!user) {
        throw HttpError(401, "Email not found");
    }

    if(user.verify) {
        throw HttpError(400, "Verification has already been passed");
    }

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="http://${BASE_URL}.api/auth/verify/${user.verificationToken}">Click verify email</a>`,
    }

    await sendEmail(verifyEmail);

    res.json({
        email: email,
        message: "Verification email sent"
    })
}

module.exports = resendVerifyEmail;