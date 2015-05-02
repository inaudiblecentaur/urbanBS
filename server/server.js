var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var userController = require('./controllers/userController.js');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function(req, res) {
    res.writeHead(200, headers);
    res.end();
});

app.post('/signup', function(req, res) {
  console.log(req.body);
  userController.signupUser(req, res)
});



var port = process.env.PORT || 3000;


app.listen(port);

console.log('Server now listening on port ' + port);

module.exports = app;