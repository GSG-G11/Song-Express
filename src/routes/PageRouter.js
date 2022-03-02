const pageRouter = require('express').Router();
const {signUpRoute, homeRoute, getData} = require('../controllers');

pageRouter.get('/', signUpRoute);

pageRouter.get('/home', homeRoute);

pageRouter.get('/search', getData);

module.exports = {pageRouter};
