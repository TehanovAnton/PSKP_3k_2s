
require('dotenv').config();

const express =         require('express');
const application =     express();
const hbs =             require('./handlebars');

const { initializePassport, passport } = require('../initializers/passport');
initializePassport(passport);

const flash =   require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

const rolesRouter =             require('../controllers/roles_controller');
const usersRouter =             require('../controllers/users_controller');
const companiesRouter =         require('../controllers/companies_controller');
const parksRouter =             require('../controllers/parks_controller');
const authentificationRouter =  require('../controllers/authentification_controller');


application.engine('handlebars', hbs.engine);
application.set('view engine', 'handlebars');
application.set('views', './views');

application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.use(flash());
application.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
application.use(passport.initialize());
application.use(passport.session());
application.use(methodOverride('_method'));

application.use(rolesRouter);
application.use(usersRouter);
application.use(companiesRouter);
application.use(parksRouter);
application.use(authentificationRouter);

module.exports = { express, application }