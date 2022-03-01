require('env2')('./src/env.json');

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/search',
  params: {locale: 'en-US', offset: '0', limit: '5'},
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY,
  },
};

module.exports = options;
