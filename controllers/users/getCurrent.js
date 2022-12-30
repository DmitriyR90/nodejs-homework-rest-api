const getCurrent = async (req, res) => {
  console.log(req.user.id);
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
