const express = require('express');
const app = express();
const axios = require('axios').default;
const options = require('./options');
const path = require('path');

const errorRouter = require('./routes/index');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/search', (req, res) => {
  const {term} = req.query;
  console.log(term);
  options.params.term = term;
  axios
    .request(options)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.use(errorRouter);

module.exports = app;
