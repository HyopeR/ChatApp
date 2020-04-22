const express = require('express');
const router = express.Router();

// Libs
const Messages = require('../src/lib/Messages');

/* GET home page. */
router.get('/list', (req, res, next) => {
    Messages.list('@Room:oH5Gris41', messages => {
        res.json(messages);
    })
});

module.exports = router;
