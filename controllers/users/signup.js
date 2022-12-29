const { Conflict } = require('http-errors');
// const bcrypt = require('bcrypt');

const { User } = require('../../models');

const signup = async (req, res) => {
  console.log();
  const { password, email, subscription } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} is already exist`);
  }

  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const result = await User.create({
  //   password: hashPassword,
  //   email,
  //   subscription,
  // });
  const newUser = new User({ email, subscription });
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: 'Created',
    user: {
      email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = signup;
