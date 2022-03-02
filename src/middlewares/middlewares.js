const path = require('path');
const express = require('express');
const {errorRouter, pageRouter} = require('../routes/index');

module.exports = app => {
  app.use(pageRouter);
  app.use(express.static(path.join(__dirname, '..', '..', 'public')));
  app.use(errorRouter);
};
