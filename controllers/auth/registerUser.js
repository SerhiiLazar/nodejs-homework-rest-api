const bcrypt = require('bcrypt');
const {User} = require("../../models/user");
const { HttpError, sendEmail } = require('../../helpers');
const gravatar = require("gravatar");
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();

const {BASE_URL} = process.env;

const registerUser = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user){
        throw HttpError(409, "Email in use")
    }
    
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = uuidv4();

    const newUser = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken});
    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="http://${BASE_URL}.api/auth/verify/${verificationToken}">Click verify email</a>`,
    }
    await sendEmail(verifyEmail);
    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
        }
    })
}

module.exports = registerUser; 