const { BadRequest } = require('http-errors');
const { User } = require('../../models');
const { sendEmail } = require('../../helpers');
const { PORT } = process.env;

const reVerifyEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequest('missing required field email');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequest(`User with ${email} was not found`);
  }
  if (user.verify) {
    throw new BadRequest('Verification has already been passed');
  }

  const mail = {
    to: email,
    subject: 'email verification letter',
    html: `<a target="_blank" href="http://localhost:${PORT}/api/users/verify/${user.verificationToken}">Please, verify your email</a>`,
  };

  await sendEmail(mail);

  res.json({
    message: 'Verification email sent',
  });
};

module.exports = reVerifyEmail;
