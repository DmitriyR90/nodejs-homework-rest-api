const { Conflict } = require('http-errors');
const { User } = require('../../models');

const signup = async (req, res) => {
  console.log();
  const { password, email, subscription } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`User with ${email} is already exist`);
  }
  const result = await User.create({ password, email, subscription });

  console.log(result);
  res.status(201).json({
    status: 'Created',

    user: {
      email,
      subscription: result.subscription,
    },
  });
};

module.exports = signup;
