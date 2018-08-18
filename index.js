var express = require('express')
var app = express()
var fs = require('fs');

//shredwards.live
app.get('/', function (req, res) {
  res.send('I have made a change.');
})

//shredwards.live/endpoint
app.get('/endpoint', (req,res)=>{
  res.send('bu');
  adfafasds();
  throw new Error("this is an ");
})

app.get('/crash', function (req, res) {
  res.send('All good');
})

app.listen(4000, function () {
  console.log('Magic is happening on port 3000!')
  
})