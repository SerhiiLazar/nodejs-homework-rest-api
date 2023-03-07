const { ctrlWrapper } = require('../../helpers');

const getContact = require('./getContact');
const getContactById = require('./getContactById');
const add = require('./add');
const remove = require('./remove');
const update = require('./update');
const updateFavorite = require('./updateFavorite');

module.exports = {
    getContact: ctrlWrapper(getContact),
    getContactById: ctrlWrapper(getContactById),
    add: ctrlWrapper(add),
    remove: ctrlWrapper(remove),
    update: ctrlWrapper(update),
    updateFavorite: ctrlWrapper(updateFavorite),
  };