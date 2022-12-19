const contactsOperations = require('../../models/contacts');

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({
      status: 'success',
      code: 200,
      contacts,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = getAll;
