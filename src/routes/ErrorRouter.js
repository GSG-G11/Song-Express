const errorRouter = require('express').Router();
const {serverError, notFoundError} = require('../controllers');

errorRouter.use(notFoundError);

errorRouter.use(serverError);

module.exports = {errorRouter};
