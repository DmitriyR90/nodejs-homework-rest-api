const contactsOperations = require('../../models/contacts');
const { NotFound } = require('http-errors');

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contacts = await contactsOperations.getById(contactId);
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
  } catch (err) {
    next(err);
  }
};

module.exports = getById;
