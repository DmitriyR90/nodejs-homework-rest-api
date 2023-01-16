const Joi = require('joi');

const reVerifySchema = Joi.object({
  email: Joi.string().email(),
}).messages({
  'string.base': `"" should be a type of string`,
  'string.empty': `"" must contain value`,
  'string.email': '{{#label}} must be a valid email',
});

module.exports = reVerifySchema;
