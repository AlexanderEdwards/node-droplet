var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('App works.');
})

app.listen(4000, function () {
  console.log('Magic is happening on port 3000!')
})