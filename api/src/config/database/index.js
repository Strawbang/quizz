const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/quizz', {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connecté à Mongoose')
});