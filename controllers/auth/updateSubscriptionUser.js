const {User} = require("../../models/user");
const { HttpError } = require('../../helpers');

const updateSubscriptionUser = async (req, res) => {
    const {_id, email} = req.user;
    const {subscription} = req.body;

    const result = await User.findByIdAndUpdate({_id},{email}, {subscription}, {new: true}, );

    if(!result) {
        throw HttpError(401, "Not authorized")
    }

    res.status(200).json({
        _id, 
        email,
        subscription
    });
}

module.exports = updateSubscriptionUser;