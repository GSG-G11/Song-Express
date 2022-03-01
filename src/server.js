const app = require('./app');

// Start the server
app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
