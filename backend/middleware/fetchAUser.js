
// middleware/fetchAUser.js

const JWT_SECRET = 'againpriyaisbtich';
var jwt = require('jsonwebtoken');

const fetchAUser = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).send({ error: 'Please authenticate again' });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);

    console.log('Token payload:', data);

  

    req.AUsers = data.ausers;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).send({ error: 'Token is not valid' });
  }
};

module.exports = fetchAUser;
