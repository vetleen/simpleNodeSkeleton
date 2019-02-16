const express = require('express')
const app = express();
const herokuPort = process.env.PORT;

// Connect to database
var mongoose = require('mongoose');
console.log("trying to connect to: " + process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("DB successfully connected!");
});


// App
app.get('/', (req, res) => {
  res.send('Hello other world!')
});

app.listen(process.env.PORT, () => {
  console.log('Listening on port: '  + herokuPort + ".")
});