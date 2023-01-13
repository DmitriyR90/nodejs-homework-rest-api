const { Conflict } = require('http-errors');
const { v4 } = require('uuid');
const { sendEmail } = require('../../helpers');
const { PORT } = process.env;

const { User } = require('../../models');

const signup = async (req, res) => {
  const { password, email, subscription } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} is already exist`);
  }

  const verificationToken = v4();
  const newUser = new User({ email, subscription, verificationToken });
  newUser.setPassword(password);
  await newUser.save();

  const mail = {
    to: email,
    subject: 'email verification letter',
    html: `<a target="_blank" href="http://localhost:${PORT}/api/users/verify/${verificationToken}">Please, verify your email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: 'Created',
    user: {
      email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = signup;
