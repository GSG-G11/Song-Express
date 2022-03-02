const path = require('path');

const signUpRoute = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'signup.html'));
};

const homeRoute = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

module.exports = {signUpRoute, homeRoute};
