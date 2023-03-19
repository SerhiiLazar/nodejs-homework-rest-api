const {
    getContact,
    getContactById,
    add,
    remove,
    update,
    updateFavorite,
} = require('./contacts');

const {
    registerUser,
    loginUser,
    currentUser,
    logoutUser,
    updateSubscriptionUser,
} = require('./auth');

module.exports = {
    getContact,
    getContactById,
    add,
    remove,
    update,
    updateFavorite,
    registerUser,
    loginUser,
    currentUser,
    logoutUser,
    updateSubscriptionUser,
  };