const express = require('express');
const app = express();
const axios = require('axios').default;
const options = require('./options');

const errorRouter = require('./routes/index');
app.use(express.static('public'));

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
