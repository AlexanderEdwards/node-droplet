var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('I have changed the message!')
})

app.listen(4000, function () {
  console.log('Magic is happening on port 3000!')
})