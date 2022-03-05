
const { companyService, Company } = require('../services/company_service');
const companiesRouter = require('express').Router();
const helpers = require('../helpers/helpers');

companiesRouter.get('/companies/index', async (req, res) => {
    let companies = await Company.findAll({ raw:true });
    res.render('./companies/index', { companies: companies })
})

companiesRouter.get('/companies/new', async (req, res) => {
    let companies = await Company.findAll({ raw:true });
    res.render('./companies/new', { companies: companies })
})

companiesRouter.post('/companies/create', async function(req, res, next) {   
    let params = req.body;
    console.log(params);
    let company = await Company.create({ 
        name:params['name'],
        email:params['email'],
        user_id:parseInt(params['user_id'])
    }).catch(error => { res.json(error) });

    res.redirect(helpers.companiesIndexPath());        
})

companiesRouter.put('/companies/:id', async (req, res) => {
    let body = '';
    let params = req.params;

    req.on('data', chunk => { body += chunk. toString(); });
    req.on('end', async () => {
        let updates = companyService.updateAttributes(JSON.parse(body));        
        let result = await Company.update(
            updates, { where: { id:params['id']}, returning: true, plain: true}
        )
        .catch(error => { res.json(error) });

        console.log(params['id']);
        console.log(result);

        if(result[1]) res.json(result[1]);
        else res.json('company not found or not updated')
    });
})

companiesRouter.delete('/companies/:id', async (req, res) => {
    let params = req.params;

    let company = await Company.findByPk(params['id']);
    let result = await Company.destroy(
        { 
            where:{ id:params['id'] },
            returning: true, 
            plain: true
        }
    ).catch(error => { res.json(error) });
    
    if(result) res.json(company);
    else res.json('company not found')
})


module.exports = companiesRouter;