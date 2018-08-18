var express = require('express')
var app = express()
var fs = require('fs');

app.get('/', function (req, res) {
  res.send('Build script worked.');
})

app.get('/endpoint', (req,res)=>{
  res.send('bu');
  adfafasds();
  throw new Error("this is an error");
})

app.get('/crash', function (req, res) {
  res.send('All good');
})

app.listen(4000, function () {
  console.log('Magic is happening on port 3000!')
  
})