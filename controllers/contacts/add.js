const { Contact } = require('../../models/contacts');

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};

module.exports = addContact;
