const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt')
const User = require('./models/user').User()

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'hghtyNN23h',
    resave: false,
    saveUninitialized: false,
  })
);

require('./21-02-config-passport');
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  console.log(req.session);
  res.send('Hello World!');
});

app.post('/sign_up', async (req, res) => {
  let params = req.body,
      hashedPassword = await bcrypt.hash(params.password, 10);

  let user = await User.create({ 
      nickname:params['nickname'],
      email:params['email'],
      password:hashedPassword,
      role_id:parseInt(params['role_id'])
  }).catch(error => { res.json(error) });
  
  console.log(JSON.stringify(user));

  res.send('signed up');        
})

app.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user) {
    if (err) {
      console.log(err);
      return res.send("ERROR");
    }

    if (!user) {
      console.log(user);
      return res.send('User not found!');
    }

    req.logIn(user, function(err) {
      if (err) {
        console.log(err);
        return res.send('Error lognin');
      }

      return res.send('good job');
    });
  })(req, res, next);
});

const auth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } 
  else {
    return res.send('you are authenticated');
  }
};

app.get('/admin', auth, (req, res) => {
  res.send('Admin page!');
});

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));