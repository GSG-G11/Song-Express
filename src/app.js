const express = require('express');
const app = express();

const errorRouter = require('./routes/index.js')
app.use(errorRouter)
module.exports = app;

