const express = require('express');

const { validation, ctrlWraper, userAuth } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { usersSchemas } = require('../../schemas');

const router = express.Router();

router.post(
  '/signup',
  validation(usersSchemas.signupSchema),
  ctrlWraper(ctrl.signup)
);

router.post(
  '/login',
  validation(usersSchemas.loginSchema),
  ctrlWraper(ctrl.login)
);

router.get('/current', userAuth, ctrlWraper(ctrl.getCurrent));

router.post('/logout', userAuth, ctrlWraper(ctrl.logout));

router.patch(
  '/',
  userAuth,
  validation(usersSchemas.updateSubscriptionSchema),
  ctrlWraper(ctrl.updateSubscription)
);

router.get('/verify/:verificationToken', ctrlWraper(ctrl.verifyEmail));

router.post(
  '/verify/',
  validation(usersSchemas.reVerifySchema),
  ctrlWraper(ctrl.reVerifyEmail)
);

module.exports = router;
