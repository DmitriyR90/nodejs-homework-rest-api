const { Contact } = require('../../models/contacts');

const getAll = async (req, res, next) => {
  const contacts = await Contact.find({});
  res.json({
    status: 'success',
    code: 200,
    contacts,
  });
};

module.exports = getAll;
