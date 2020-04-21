const socketio = require('socket.io');
const io = socketio();

const socketApi = {
    // wwww içindeki io dahili burdan gitmektedir.
    io
};

io.on('connection', socket => {
    console.log('A user logged in.');
});

module.exports = socketApi;
