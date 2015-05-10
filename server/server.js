var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var gameData = require('./routes/gameData');
var userController = require('./controllers/userController.js');
var gameController = require('./controllers/gameController.js');
var questionController = require('./controllers/questionController.js');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

io.sockets.on('connection', function(socket) {
  console.log('socket connected');

  socket.on('disconnect', function() {
    console.log('socket disconnected');
  });

})

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

app.get('/listUsers', function(req, res) {
  userController.retrieveUsers(req, res);
}); 

app.post('/invitePlayer', function(req, res) {
  gameController.invitePlayers(req, res);
});

app.get('/listGames', function(req, res) {
  gameController.listGames(req, res)
});

app.post('/addGame', function(req, res) {
  console.log('hit')
  gameController.createGame(req, res)
});

app.get('/currentQuestion', function(req, res) {
  console.log('getting current question')
  questionController.getQuestion(req, res);
});

app.post('/submitAnswer', function(req, res) {
  console.log(req.body);
  questionController.submitAnswer(req, res);
});

app.get('/getAnswer', function(req, res) {
  console.log(req.body);
  questionController.getAnswer(req, res);
});

app.get('/endGame', function(req, res) {
  console.log(req.body);
  questionController.endGame(req, res);
})


var port = process.env.PORT || 3000;


app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;