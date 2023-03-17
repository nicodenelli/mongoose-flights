const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// event listener that fires when 
// our express app has created a connection the mongodb
// database running on our computer
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});