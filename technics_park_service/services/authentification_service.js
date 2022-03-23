
const  User = require('../models/user').User();
const helpers = require('../helpers/helpers');
const bcrypt = require('bcrypt');

function AuthentificationService() {
    this.authentificateUser = async function(email, password, done) {
        // let hashedPassword = await bcrypt.hash(password, 10);

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

    this.checkAuthentificated = function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        
        return res.redirect(helpers.signInGetPath());
    }

    this.checkNotAuthentificated = function(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }

        console.log(`check not AUTH?: ${!req.isAuthenticated()}`);
        return res.redirect('/companies/index');
    }
}

module.exports = AuthentificationService;
