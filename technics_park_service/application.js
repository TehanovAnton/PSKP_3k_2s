const { application } = require('./initializers/express');
const rolesRouter = require('./controllers/roles_controller');
const { PORT } = require('./initializers/server');

application.use(rolesRouter)

application.listen(PORT, () => { console.log('application start'); });