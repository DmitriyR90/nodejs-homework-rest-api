const contactsOperations = require('../../models/contacts');
const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  phone: Joi.number().positive().required(),
  email: Joi.string().email().required(),
});

const addContact = async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    const contacts = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      contacts,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addContact;
