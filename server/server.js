var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var gameData = require('./routes/gameData')
var userController = require('./controllers/userController.js');
var gameController = require('./controllers/gameController.js');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.get('/', function(req, res) {
    res.writeHead(200);
    res.end();
});

app.post('/signup', function(req, res) {
  userController.signupUser(req, res)
});

app.get('/gamedata', gameData.findAll);
app.get('/gamedata/:id', gameData.findById);
app.get('/invites', gameData.getInvites);

app.get('/listGames', function(req, res) {
  gameController.listGames(req, res)
});

app.post('/addGame', function(req, res) {
  console.log('hit')
  gameController.createGame(req, res)
});


var port = process.env.PORT || 3000;


app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;