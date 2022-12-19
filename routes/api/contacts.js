const express = require('express');
const router = express.Router();

const { contacts: ctrl } = require('../../controllers');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', ctrl.addContact);

router.put('/:contactId', ctrl.updateById);

router.delete('/:contactId', ctrl.deleteContact);

module.exports = router;
