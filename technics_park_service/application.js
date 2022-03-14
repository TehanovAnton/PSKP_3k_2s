const { application } = require('./initializers/express');

const rolesRouter = require('./controllers/roles_controller');
const usersRouter = require('./controllers/users_controller');
const companiesRouter = require('./controllers/companies_controller');
const parksRouter = require('./controllers/parks_controller');

const { PORT } = require('./initializers/server');

application.use(rolesRouter);
application.use(usersRouter);
application.use(companiesRouter);
application.use(parksRouter);

application.listen(PORT, () => { console.log('application start'); });