const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const graphQLSchema = require('./graphql/schema');
const graphQLResolvers = require('./graphql/resolvers');
const authFacebookRoutes = require('./api');
require('./api/passport')(passport);

// Enviornment variables
require('dotenv').config();

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user) {
    done(err, user);
  });	
});

const app = express();

app.use(session({
	secret: 'nathan',	
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors(),	
	bodyParser.urlencoded({extended: false}),
	bodyParser.json()
);

app.use('/auth/facebook', authFacebookRoutes);

app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphQLSchema,
		rootValue: graphQLResolvers, 
		graphiql: true
	})
);

const database = process.env.MONGO_URI || ''
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(
  async connection => {
    console.log('Database loaded and connected.')
  }
)


app.listen(process.env.PORT || 5000, ()=> {
	console.log('Server started.');
})
