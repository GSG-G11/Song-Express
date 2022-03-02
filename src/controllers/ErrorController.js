const path = require('path');

const notFoundError = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'errors', '404.html'));
};

const serverError = (req, res) => {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', 'errors', '500.html'));
};

module.exports = {notFoundError, serverError};
