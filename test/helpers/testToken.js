const jwt = require('jsonwebtoken');

module.exports = {
  generate: (user) => jwt.sign(JSON.stringify(user), process.env.SECRET_KEY),
};
