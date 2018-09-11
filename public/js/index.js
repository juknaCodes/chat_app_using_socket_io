var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');
});
socket.on('disconnect', function() {
  console.log('Unable to connect to server');
});

socket.on('newMessage', (message)=> {
  console.log("newMessage", message);
});

socket.emit()
