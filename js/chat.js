const express = require('express');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000);
console.log("Server running...");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/header.html');
});

io.on('connection', (socket) => {
    console.log("user connected");
    socket.emit("welcome", "Salute my friend");
})