const Role = require('../models/role').Role();
const rolesRouter = require('express').Router();

rolesRouter.get('/roles', async (req, res) => {
    let roles = await Role.findAll();
    res.json(roles)
})

rolesRouter.post('/roles', async (req, res) => {
    let body = '';

    req.on('data', chunk => { body += chunk. toString(); });
    req.on('end', async () => {
        let object = JSON.parse(body);

        let role = await Role.create({ title:object['title'] })
                             .catch(error => { res.json(error) });
        res.json(role);        
    });
})

rolesRouter.put('/roles/:id', async (req, res) => {
    let body = '';
    let params = req.params;

    req.on('data', chunk => { body += chunk. toString(); });
    req.on('end', async () => {
        let object = JSON.parse(body);
        
        let result = await Role.update(
            { title:object['title'] },
            { where: { id:params['id']}, returning: true, plain: true}
        )
        .catch(error => { res.json(error) });

        res.json(result[1]);        
    });
})

rolesRouter.delete('/roles/:id', async (req, res) => {
    let params = req.params;

    let role = await Role.findByPk(params['id']);
    let result = await Role.destroy(
        { 
            where:{ id:params['id'] },
            returning: true, 
            plain: true
        }
    ).catch(error => { res.json(error) });
    
    if(result) res.json(role);
    else res.json('role not found')
})


module.exports = rolesRouter;