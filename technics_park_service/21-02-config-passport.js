const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt')

const User = require('./models/user').User()

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
    let user = await User.findByPk(id);
    console.log(user);
    return done(null, user);
})

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },

    async function(email, password, done) {
      try {
        let user = await User.findOne({ where: { email:email } });

        if (user == null) {
          done(null, false, { message:'No user' })
        } 
        else if (await bcrypt.compare(password, user.password)) {
          return done(null,  user)
        }
        else {
          return done(null, false, { message:'Password incorrect' })
        }
      }
      catch(err) {
        done(err)
      }
    }
  )
);