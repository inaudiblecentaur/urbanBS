var User = require('../models/userModel.js');
var mongoose = require('mongoose');
var db = require('../db.js')

var userController = {

signupUser: function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        console.log(username + " " + password);
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save(function(err, newUser) {
          if (err) {
            res.send(500, err);
          }
          res.json(newUser)
        });
      } else {
        console.log('Account already exists');
        res.end();
      }
    });
  }
};

module.exports = userController;