var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var userController = require('./controllers/userController.js');
var gameData = require('./routes/gameData')

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
    res.writeHead(200, headers);
    res.end();
});

app.post('/signup', function(req, res) {
  userController.signupUser(req, res)
});

app.get('/gamedata', gameData.findAll);
app.get('/gamedata/:id', gameData.findById);
app.get('/invites', gameData.getInvites);


var port = process.env.PORT || 3000;


app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;