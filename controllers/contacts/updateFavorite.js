const { Contact } = require('../../models/contacts');
const { NotFound } = require('http-errors');

const updateFavorite = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );
  if (!result) {
    throw new NotFound(`Contact with id ${contactId} not fonud`);
  }
  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  });
};
module.exports = updateFavorite;
