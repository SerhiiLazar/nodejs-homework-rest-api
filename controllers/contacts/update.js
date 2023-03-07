const {Contact} = require("../../models");
const { HttpError } = require('../../helpers');

const update = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findOneAndUpdate(id, req.body, {new: true});
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
  };

module.exports = update;