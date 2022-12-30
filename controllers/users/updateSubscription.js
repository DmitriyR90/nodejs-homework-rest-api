/* eslint-disable no-unused-vars */
const { User } = require('../../models/user');

const updateSubscription = async (req, res) => {
  const { id } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );

  res.status(201).json({
    status: 'success',
    subscription,
  });
};

module.exports = updateSubscription;
