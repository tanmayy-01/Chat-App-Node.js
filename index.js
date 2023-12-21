
const express = require('express');
const http = require('http');
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//It's a middleware that actually maps, where are our static assets
app.use('/', express.static(__dirname + '/public'));

server.listen(1050, () => {
    console.log("Server started");
})