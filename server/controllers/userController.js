var User = require('../models/userModel.js');
var mongoose = require('mongoose');
var db = require('../db.js')

var userController = {

signupUser: function(req, res) {
  console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var fbId = req.body.fbId;
  var imageUrl = req.body.imageUrl;

  User.findOne({ fbId: fbId })
    .exec(function(err, user) {
      if (!user) {
        var newUser = new User({
          fbId: fbId,
          firstName: firstName,
          lastName: lastName,
          imageUrl: imageUrl,
          score: 0
        });
        newUser.save(function(err, newUser) {
          if (err) {
            console.log(err);
            res.send(500, err);
          }
          res.json(newUser)
        });
      } else {
        console.log('Account already exists');
        res.end();
      }
    });
  },

  retrieveUsers: function(req, res) {
    User.find({}, function(err, data) {
      if (!err) { 
          res.send(200, data);
      } 
      else {
        throw err;
      }
    });
  },

  answerQuestion: function(req, res) {
    if (req.body.fbId) {
      var answer = req.body.answer;
      User.find({fbId: req.body.fbId})
      .exec(function(err, user) {
        if(!err) {
          user.answer = answer;
          res.end();
        }
        else {
          console.log('there was an error submitting question: ' + err);
          res.send(500, err);
        }
      })
    }
    else {
      console.log('no player');
      res.end();
    }
  }

};

module.exports = userController;