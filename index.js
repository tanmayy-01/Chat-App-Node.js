
const express = require('express');
const http = require('http');
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("A user is connected", socket.id);
    
    socket.on('from_client', ()=> {
        console.log("Collected a new event from client");
    })

    setInterval(() => {
        socket.emit('from_server');
    },2000)
})



//It's a middleware that actually maps, where are our static assets
app.use('/', express.static(__dirname + '/public'));

server.listen(1050, () => {
    console.log("Server started");
})