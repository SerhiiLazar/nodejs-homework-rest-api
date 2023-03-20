const {ctrlWrapper} = require("../../helpers");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const currentUser = require("./currentUser");
const logoutUser = require("./logoutUser");
const updateSubscriptionUser = require("./updateSubscriptionUser");

module.exports = {
    registerUser: ctrlWrapper(registerUser),
    loginUser: ctrlWrapper(loginUser),
    currentUser: ctrlWrapper(currentUser),
    logoutUser: ctrlWrapper(logoutUser),
    updateSubscriptionUser: ctrlWrapper(updateSubscriptionUser),
}