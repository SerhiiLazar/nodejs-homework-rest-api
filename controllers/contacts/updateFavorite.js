const {Contact} = require("../../models");
const { HttpError } = require('../../helpers');

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const {favorite} = req.body;
    const result = await Contact.findByIdAndUpdate(id, {favorite}, {new: true});
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.status(200).json(result);
  };

module.exports = updateFavorite;