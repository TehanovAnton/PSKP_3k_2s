const express = require('express');
const session = require('express-session');

const passport = require('./21-01-config-passport');
const bcrypt = require('bcrypt')

const User = require('./models/user').User()

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'hghtyNN23h',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());


let checkAuthentificated = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('authenticated');
    return next();
  }    
  else {
    res.redirect('/login')
  }
}

let checkNotAuthentificated = (req, res, next) => {
  if (!req.isAuthenticated())
    return next();
  else
    res.send('authentificated')
}

app.get('/login', passport.authenticate('digest', { session:true }),
  (req, res) => {
    res.send(JSON.stringify(req.user))
  }
);

app.get('/logout', passport.authenticate('digest', { session:true }),
  function(req, res){
    req.logout();
    res.send('loged out');
  }
);

app.get('/resource',
  (req, res) => {    
    if (req.headers['authorization'] && req.isAuthenticated()) {
      res.send('Resource')
    }
    else {
      console.log(`redirect`);
      res.redirect('/login')
    }
  })

app.post('/sign_up', async (req, res) => {
  let params = req.body
  let hashedPassword = await bcrypt.hash(params.password, 10);

  let user = await User.create({ 
      nickname:params['nickname'],
      email:params['email'],
      password:hashedPassword,
      role_id:parseInt(params['role_id'])
  }).catch(error => { res.json(error) });
  
  console.log(JSON.stringify(user));
  res.send('signed up');        
})
  

app.use(function(req, res, next) {
  res.status(404)
  res.send("404: Page not found")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));