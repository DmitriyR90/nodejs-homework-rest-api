const contactsOperations = require('../../models/contacts');
const { NotFound } = require('http-errors');
const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),
  phone: Joi.number().positive(),
  email: Joi.string().email().message('{{#label}} must be a valid email'),
})
  .min(1)
  .message('missing fields');

const updateById = async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    const { contactId } = req.params;
    const result = await contactsOperations.updateContact(contactId, req.body);
    if (!result) {
      throw new NotFound(`Contact with id ${contactId} not fonud`);
    }
    res.status(201).json({
      status: 'success',
      code: 201,
      result,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = updateById;
