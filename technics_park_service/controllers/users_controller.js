const User = require('../models/user').User();
const usersRouter = require('express').Router();

usersRouter.get('/users', async (req, res) => {
    let users = await User.findAll();
    res.json(users)
})

// usersRouter.post('/users', async (req, res) => {
//     let body = '';

//     req.on('data', chunk => { body += chunk. toString(); });
//     req.on('end', async () => {
//         let object = JSON.parse(body);

//         let role = await User.create({ title:object['title'] })
//                              .catch(error => { res.json(error) });
//         res.json(role);        
//     });
// })

// usersRouter.put('/users/:id', async (req, res) => {
//     let body = '';
//     let params = req.params;

//     req.on('data', chunk => { body += chunk. toString(); });
//     req.on('end', async () => {
//         let object = JSON.parse(body);
        
//         let result = await User.update(
//             { title:object['title'] },
//             { where: { id:params['id']}, returning: true, plain: true}
//         )
//         .catch(error => { res.json(error) });

//         res.json(result[1]);        
//     });
// })

// usersRouter.delete('/users/:id', async (req, res) => {
//     let params = req.params;

//     let role = await User.findByPk(params['id']);
//     let result = await User.destroy(
//         { 
//             where:{ id:params['id'] },
//             returning: true, 
//             plain: true
//         }
//     ).catch(error => { res.json(error) });
    
//     if(result) res.json(role);
//     else res.json('role not found')
// })


module.exports = usersRouter;