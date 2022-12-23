// const contactsOperations = require('../../models/contacts');
const { NotFound } = require('http-errors');
const { Contact } = require('../../models/contacts');

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contacts = await Contact.findById(contactId);
  if (!contacts) {
    const error = new NotFound(`Contact with id ${contactId} not fonud`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: 'success',
    code: 200,
    contacts,
  });
};

module.exports = getById;
