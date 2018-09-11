const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
let PORT = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(path.join(__dirname, "../public")));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.on('disconnect', ()=> {
    console.log("client disconnected");
  });

  socket.broadcast.emit('newMessage', {
    from:"Admin",
    text:"New User Joined",
    createdAt: new Date().getTime()
  })

  socket.emit('newMessage', {
    from:"Admin",
    text:"Welcome to the chat group",
    createdAt: new Date().getTime()
  })
})
server.listen(PORT, ()=> {
  console.log("Server started at port 3000");
})
