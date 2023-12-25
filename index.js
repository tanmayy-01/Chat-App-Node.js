
const express = require('express');
const http = require('http');
const socketio = require("socket.io");
const connect = require('./config/database-config');
const Chat = require('./models/chat');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {

    socket.on('join_room', data => {
        socket.join(data.roomid);
    })
    
    socket.on('msg_send', async (data) => {
        // console.log(data);
        const chat = await Chat.create({
            roomId: data.roomid,
            user: data.username,
            content: data.msg
        });   
        io.to(data.roomid).emit('msg_rcvd', data);
    })
})



//It's a middleware that actually maps, where are our static assets
app.use('/', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/chat/:roomid', (req,res) => {
    res.render('index',{
        name: 'Tanmay',
        id: req.params.roomid
    });
})

server.listen(1050, async () => {
    console.log("Server started");
    await connect();
    console.log("MonogoDB is connected");
})