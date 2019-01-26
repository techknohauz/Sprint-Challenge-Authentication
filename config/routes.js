const axios = require('axios');
const db = require('../database/usersModel');

const { authenticate } = require('../auth/authenticate');
const { passwordProtection } = require('../middleware/middleware');

module.exports = server => {
  server.post('/api/register', checkFields, register);
  server.post('/api/login', loginCheck, login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/api', home);
};

function home(req,res){
  res.send('Welcome!')
}

function register(req, res) {  
  // implement user registration
  const user = req.body;
  user.password = passwordProtection(user.password);
  db.add(user)
    .then(response => {
      res.status(201).json({ message: 
        "Account created successfully!"})
    })
    .catch(err => {
      res.status(500).json({
        message: "Unable to add new account"
      })
    })
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
