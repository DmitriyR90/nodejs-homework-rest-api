const Joi = require('joi');

const signupSchema = Joi.object({
  password: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
}).messages({
  'string.base': `"" should be a type of string`,
  'string.empty': `"" must contain value`,
  'string.email': '{{#label}} must be a valid email',
  'any.required': `missing required name field`,
});

module.exports = signupSchema;
