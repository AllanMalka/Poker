const express = require('express');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io').listen(server);
let users = [];

server.listen(process.env.PORT || 3000);
console.log("Server running...");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/header.html');
});

const tables = io.of('/tables');
tables.on('connection', (socket) => {

    console.log('%c%s', 'color: #bada55', 'User connected' );
    socket.emit('welcome', 'Salute my friend');

    socket.on('chat message', msg => {
        socket.broadcast.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('%c%s', 'color: #ff0000', 'User disconnected');
    })
});

const pokerTable = io.of('/pokertable');
pokerTable.on('connection', socket => {
    socket.join('first');
})