const {notFoundError, serverError} = require('./ErrorController');
const {signUpRoute, homeRoute} = require('./PageController');
const {getData} = require('./APIController');

module.exports = {notFoundError, serverError, signUpRoute, homeRoute, getData};
