var socket = io();

$('#msg-click').click(function(){
  sendMessage();
});

$('#msg').keydown(function(event) {
  if (event.keyCode == 13) {
    sendMessage();
  }
});

var sendMessage = function() {
  socket.emit('message', $('#msg').val());

  $('#msg').val('');
};