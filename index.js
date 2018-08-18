var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');

//Point to root of build directory 
app.use(express.static(path.join(__dirname, './test-app/dist/test-app')));

//shredwards.live
app.get('/', function (req, res) {
  res.send('I have made a change.');
})

//shredwards.live/endpoint
app.get('/endpoint', (req,res)=>{
})

app.get('/crash', function (req, res) {
  res.send('All good');
})

app.listen(4000, function () {
  console.log('Magic is happening on port 3000!')
  
})