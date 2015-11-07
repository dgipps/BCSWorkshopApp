var app = require('express')();
var express = require('express');
var http = require('http').Server(app);

var port = 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));


http.listen(port, function(){
  console.log('Listening on ' + port);
});