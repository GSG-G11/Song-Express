const axios = require('axios').default;
const options = require('../options');
const getData = (req, res) => {
  const {term} = req.query;
  options.params.term = term;
  axios
    .request(options)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = {getData};
