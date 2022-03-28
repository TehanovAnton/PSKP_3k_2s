const passport = require('passport');
const DigestStrategy = require('passport-http').DigestStrategy;
const User = require('./models/user').User()
const bcrypt = require('bcrypt')
const fs = require('fs');
const res = require('express/lib/response');

passport.use( new DigestStrategy({ qop:'auth' },
  async function (username, done) {
    try {      
      console.log('GO');
      let user = await User.findOne({ where: { email:username }, raw:true })
      console.log(user);
  
      if (!user) { return done(null, false); }
      
      return done(null, user, user.password);
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