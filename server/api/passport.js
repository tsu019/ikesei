const express = require('express')
const router = express.Router()
const FacebookStrategy = require('passport-facebook');
const passport = require('passport');
const User = require('../models/userModel')

const facebookOptions = {
	clientID: '2850154691870551',
	clientSecret: '131888d9a99c5e397876afe046529ca5',
	callbackURL: 'http://localhost:5000/auth/facebook/callback',
	profileFields: ['id', 'email', 'first_name', 'last_name']
};

const facebookCallback = async (accessToken, refreshToken, profile, done) => {
	// Search database to see if user exists 
	const user = await User.find({facebookId: profile.id});

	if (user.length > 0) {
		done(null, user[0]);
		return;
	}

	const newUser = new User({
		facebookId: profile.id,
		firstName: profile.name.givenName,
		lastName: profile.name.familyName,
		email: profile.emails && profile.emails[0] && profile.emails[0].value
	}, (err) => {if (err) throw err});

	// Save to database
	newUser.save();

	done(null, newUser); 
};

module.exports = passport => {
	passport.use(new FacebookStrategy(
		facebookOptions,
		facebookCallback,
	));
};


