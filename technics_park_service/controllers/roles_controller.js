const { application } = require('../initializers/express');
const Role = require('../models/role').Role();
const rolesRouter = require('express').Router();
const { PORT } = require('../initializers/server');

rolesRouter.get('/roles', async (req, res) => {
    roles = await Role.findAll();
    res.json(roles)
})

application.use(rolesRouter)

application.listen(PORT, () => { console.log('application start'); });