
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const AuthentificationService = require('../services/authentification_service');
const User = require('../models/user').User();


function initializePassport(passport) {
    let service = new AuthentificationService();
    passport.use(
        new LocalStrategy(
            { usernameField: 'email' },
            service.authentificateUser)
    )
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser(async (id, done) => {
        let user = await User.findByPk(id);
        console.log(user);
        return done(null, user);
    })
}

module.exports = { initializePassport, passport };
