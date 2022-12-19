const contactsOperations = require('../../models/contacts');
const { NotFound } = require('http-errors');

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.removeContact(contactId);
    if (!result) {
      throw new NotFound(`Contact with id ${contactId} not fonud`);
    }
    res.json({
      status: 'success',
      code: 200,
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
