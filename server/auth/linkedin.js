var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var User = require('../models/user');
var config = require('../config/_config');
var init = require('./init');

passport.use(new LinkedInStrategy({
  clientID: config.linkedin.clientID,
  clientSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    // var searchQuery = {
    //   name: r_liteprofile.displayName
    // };

    var updates = {
      name: profile.displayName,
      someID: profile.id
    };

    var options = {
      upsert: true
    };
    console.log('profileeeeeeeeeeeeeeeeeeeeeeeeeeeeee',profile)
    return done(null, profile);
   
  }

));
// serialize user into the session
init();


module.exports = passport;
