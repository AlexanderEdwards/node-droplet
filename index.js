var express = require('express')
var app = express()
var fs = require('fs');

app.get('/', function (req, res) {
  res.send('App works.');
})

app.get('/endpoint', (req,res)=>{
  res.send('this is an endpoint');
  adfafasds();
  throw new Error("this is an error");
})

app.get('/crash', function (req, res) {
  fs.readFile('somefile.txt', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
})

app.listen(4000, function () {
  console.log('Magic is happening on port 3000!')
  
})