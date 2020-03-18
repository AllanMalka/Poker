// var socket = io('http://localhost:3000');
var socket = io('http://localhost:3000/tables');

socket.on('welcome', message => {
    console.log('%c%s', 'color: #00a3cc', message);
});

socket.on('chat message', msg => {
    $('#chatMsg').append(`<li>${msg}</li>`);
})

$('form').submit(function (e) {
    e.preventDefault();
    const msg = $('#m');
    socket.emit('chat message', msg.val());
    $('#chatMsg').append(`<li class="own">${msg.val()}</li>`);
    msg.val('');
});

