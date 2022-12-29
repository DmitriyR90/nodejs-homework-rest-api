const express = require('express');
const router = express.Router();

const { validation, ctrlWraper, userAuth } = require('../../middlewares');
const { contactsSchemas } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

router.get('/', userAuth, ctrlWraper(ctrl.getAll));

router.get('/:contactId', ctrlWraper(ctrl.getById));

router.post(
  '/',
  userAuth,
  validation(contactsSchemas.addSchema),
  ctrlWraper(ctrl.addContact)
);

router.put(
  '/:contactId',
  validation(contactsSchemas.updateSchema),
  ctrlWraper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  validation(contactsSchemas.updateFavoriteSchema),
  ctrlWraper(ctrl.updateFavorite)
);

router.delete('/:contactId', ctrlWraper(ctrl.deleteContact));

module.exports = router;
