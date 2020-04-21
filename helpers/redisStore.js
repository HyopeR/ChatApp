const session = require('express-session');
const redisStore = require('connect-redis')(session);

module.exports = new redisStore({
    host: process.env.REDIS_URI,
    post: process.env.REDIS_PORT,
    pass: process.env.REDIS_PASS
});
