const express = require('express');
const app = express();
const middlewares = require('./middlewares/middlewares');

middlewares(app);

module.exports = app;
