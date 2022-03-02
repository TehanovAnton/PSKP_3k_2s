
const { companyService, Company } = require('../services/company_service');
const companiesRouter = require('express').Router();

companiesRouter.get('/companies', async (req, res) => {
    let companies = await Company.findAll();
    res.json(companies)
})

companiesRouter.post('/companies', async (req, res) => {
    let body = '';

    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        let object = JSON.parse(body);

        let company = await Company.create({ 
            name:object['name'],
            email:object['email'],
            user_id:object['user_id']
        }).catch(error => { res.json(error) });

        res.json(company);        
    });
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