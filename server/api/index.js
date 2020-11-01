const express = require('express')
const router = express.Router()
const passport = require('passport')

// GET /auth/facebook
router.get('/', passport.authenticate('facebook', {scope: ['email'] } ));

// GET /auth/facebook/callback
router.get('/callback', passport.authenticate('facebook', {
	successRedirect: 'http://localhost:5000/graphql',
	failureRedirect: 'http://localhost:5000/graphql',
}));

module.exports = router;
