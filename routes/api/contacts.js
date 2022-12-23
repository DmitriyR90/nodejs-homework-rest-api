const express = require('express');
const router = express.Router();

const { validation } = require('../../middlewares');
const { contactsSchemas } = require('../../schemas');
const { ctrlWraper } = require('../../middlewares');
const { contacts: ctrl } = require('../../controllers');

router.get('/', ctrlWraper(ctrl.getAll));

router.get('/:contactId', ctrlWraper(ctrl.getById));

router.post(
  '/',
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
