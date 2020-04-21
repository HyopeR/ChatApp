const socketio = require('socket.io');
const io = socketio();

const socketApi = {
    // wwww içindeki io dahili burdan gitmektedir.
    io
};

/**
 * Redis adapter
 */
/*
    Redis adapter sayesinde uygulama 2 ayrı portta çalıştırılıyor olsa bile
    socket.io bütün portlara dataları broadcast eder.
 */
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({
    host: process.env.REDIS_URI,
    port: process.env.REDIS_PORT
}));

io.on('connection', socket => {
    console.log('A user logged in.');

    socket.broadcast.emit('hello');
});

module.exports = socketApi;
