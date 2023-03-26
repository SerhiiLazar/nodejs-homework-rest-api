const { HttpError } = require('../../helpers');
const {User} = require("../../models/user");


const verifyEmail = async (req, res) => {
    const {verifycationTocen} = req.params;
    const user = User.findOne({verifycationTocen});

    if(!user) {
        throw HttpError(401, "Email not found");
    }

    await User.findByIdAndUpdate(user._id, {verify: true, verifycationTocen: ""});

    res.json({
        message: "Email verify success"
    })

}

module.exports = verifyEmail;