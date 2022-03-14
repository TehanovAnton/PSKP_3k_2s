
const User = require('../models/user').User();
const helpers = require('../helpers/helpers');
const bcrypt = require('bcrypt');
const authentificationRouter = require('express').Router();
const { passport } = require('../initializers/passport');
const AuthentificationService = require('../services/authentification_service');
let service = new AuthentificationService();

authentificationRouter.get('/sign_up', service.checkNotAuthentificated, (req, res) => {
    res.render('./authentification/sign_up');
})

authentificationRouter.post('/sign_up', service.checkNotAuthentificated, async (req, res) => {
    let params = req.body,
        hashedPassword = await bcrypt.hash(params.password, 10);

    let user = await User.create({ 
        nickname:params['nickname'],
        email:params['email'],
        password:hashedPassword,
        role_id:parseInt(params['role_id'])
    }).catch(error => { res.json(error) });
    
    console.log(JSON.stringify(user));

    res.redirect(helpers.signInGetPath());        
})

authentificationRouter.get('/sign_in', service.checkNotAuthentificated, (req, res) => {
    res.render('./authentification/sign_in');
})

authentificationRouter.post('/sign_in', service.checkNotAuthentificated, passport.authenticate('local', {
    successRedirect: '/companies/index',
    failureRedirect: '/sign_in',
    failurFlash: true
}))

authentificationRouter.delete('/sign_out', (req, res) => {
    req.logOut()
    res.redirect(helpers.signInGetPath());
})

module.exports = authentificationRouter;
