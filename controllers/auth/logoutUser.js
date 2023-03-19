const {User} = require("../../models/user");
const { HttpError } = require('../../helpers');


const logoutUser = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findByIdAndUpdate(_id, {token: ""});

    if(!user) {
        throw HttpError(401, "Not authorized")
    }

    res.json({
        status: 'success',
        code: 204,
        data: {
            message: "No Content",
        }
    });
    
};

module.exports = logoutUser;