const mongoose = require('mongoose');
mongoose.connect('mongodb://root:ydUB4msK@ds251849.mlab.com:51849/heroku_wnzklj0z');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('DB connected successfully');
});

module.exports = {db: mongoose}