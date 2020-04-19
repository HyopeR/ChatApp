const express = require('express');
const router = express.Router();
const passportGoogle = require('../auth/google');

// Login with google click router
router.get('/google', passportGoogle.authenticate(
    'google',
    {
        scope: ['profile']
    }
));

router.get('/google/callback', passportGoogle.authenticate(
    'google',
    {
        failuredRedirect: '/'
    }),
    (req, res) => {
        res.redirect('/chat');
    }
);

module.exports = router;


