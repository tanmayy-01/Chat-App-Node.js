
const express = require('express');
const http = require('http');
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("A user is connected", socket.id);
    
    socket.on('msg_send', (data) => {
        console.log(data);
        io.emit('msg_rcvd', data);
    })
})



//It's a middleware that actually maps, where are our static assets
app.use('/', express.static(__dirname + '/public'));

server.listen(1050, () => {
    console.log("Server started");
})