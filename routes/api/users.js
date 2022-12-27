const express = require('express');

const { validation, ctrlWraper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { usersSchemas } = require('../../schemas');

const router = express.Router();

router.post(
  '/signup',
  validation(usersSchemas.signupSchema),
  ctrlWraper(ctrl.signup)
);

module.exports = router;
