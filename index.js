var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

io.on('connection', function (socket) {
  console.log('User connected');

  socket.on('disconnect', function(){
    console.log('User disconnected');
  });

  socket.on('message', function(msg) {
    console.log("Message: " + msg);
  });
});


http.listen(port, function(){
  console.log('Listening on ' + port);
});