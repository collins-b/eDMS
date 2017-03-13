const jwt = require('jsonwebtoken');

module.exports = {
  authenticate: (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
          return res.json({
            message: 'Failed to authenticate token.'
          });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(401).send({
        message: 'No token provided.'
      });
    }
  },

  checkIfAdmin: (req, res, next) => {
    if (req.decoded.role !== 'admin') {
      return res.status(401).send({
        message: 'Access Denied.Admin only allowed for this operation!'
      });
    }
    next();
  }
};
