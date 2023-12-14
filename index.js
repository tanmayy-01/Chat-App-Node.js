const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//It's a middleware that actually maps where are our static assets
app.use('/', express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log("Server started");
})