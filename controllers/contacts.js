const {Contact} = require("../models/contact");
const { HttpError, ctrlWrapper } = require('../helpers/');

const getContact = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({
    message: 'Contact deleted',
  });
};

const update = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findOneAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};
const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findOneAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = {
  getContact: ctrlWrapper(getContact),
  getContactById: ctrlWrapper(getContactById),
  add: ctrlWrapper(add),
  remove: ctrlWrapper(remove),
  update: ctrlWrapper(update),
  updateFavorite: ctrlWrapper(updateFavorite),
};
