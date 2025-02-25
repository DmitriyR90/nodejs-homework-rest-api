const getAll = require('./getAll');
const getById = require('./getById');
const addContact = require('./add');
const updateById = require('./update');
const updateFavorite = require('./updateFavorite');
const deleteContact = require('./removeById');

module.exports = {
  getAll,
  getById,
  addContact,
  updateById,
  updateFavorite,
  deleteContact,
};
