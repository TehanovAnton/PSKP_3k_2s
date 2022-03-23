const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('./models/user').User()
const bcrypt = require('bcrypt')
const fs = require('fs');
const res = require('express/lib/response');

passport.use( new BasicStrategy({ usernameField: 'email' },
  async function (email, password, done) {
    try {      
      console.log('GO');
      let user = await User.findOne({ where: { email:email } })
  
      if (!user) { return done(null, false); }
      if (await !bcrypt.compare(password, user.password)) { return done(null, false) }
      
      return done(null, user);
    }
    catch(err) {
      return done(err)
    }
  }
) );

passport.serializeUser((user, done) => {
  return done(null, JSON.stringify(user))
})

passport.deserializeUser((user, done) => {
  return done(null, JSON.parse(user))
})

module.exports = passport