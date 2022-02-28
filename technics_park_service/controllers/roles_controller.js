const { application } = require('../initializers/express');
const { sequelize } = require('../db/database');
const { Role } = require('../models/role').Role(sequelize);
const { PORT } = require('../initializers/server');

application.get('/roles', async (req, res, next) => {
    roles = await Role.findAll();
    res.json(roles)
})

application.listen(PORT, () => { console.log('application start'); });