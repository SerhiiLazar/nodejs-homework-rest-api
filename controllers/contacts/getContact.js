const {Contact} = require("../../models");

const getContact = async (req, res) => {
    const result = await Contact.find();
    res.json(result);
  };

module.exports = getContact;