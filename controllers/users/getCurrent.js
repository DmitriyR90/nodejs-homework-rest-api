const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;
  res.json({
    status: 'success',
    user: {
      email,
      subscription,
    },
  });
};

module.exports = getCurrent;
