const { Contact } = require('../../models/contacts');
const { NotFound } = require('http-errors');

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound(`Contact with id ${contactId} not fonud`);
  }
  res.json({
    status: 'success',
    code: 200,
    result,
  });
};

module.exports = deleteContact;
