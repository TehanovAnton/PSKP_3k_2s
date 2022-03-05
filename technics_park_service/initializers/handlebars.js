const { create } = require('express-handlebars');
const helpers = require('../helpers/helpers');

const hbs = create({
    partialsDir: ['views/companies/partials/'],
    helpers: helpers
});

module.exports = hbs;