const { Unautorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET_KEY } = process.env;

const userAuth = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') {
      throw new Unautorized('Not authorized');
    }
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      throw new Unautorized('Not authorized');
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === 'Invalid signature') {
      error.status = 400;
    }
    next(error);
  }
};

module.exports = userAuth;
