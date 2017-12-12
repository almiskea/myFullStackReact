const passport = require('passport');
const key =  require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:'789083793219-5feqg69cpp54lej1pdv7pv3vqo3clb5u.apps.googleusercontent.com',
      clientSecret:'MQYC18BjjJoWjduNk59lscXP',
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken',accessToken);
      console.log('refreshToken',refreshToken);
      console.log('profile',profile);
    }
  )
);
