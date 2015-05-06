var User = require('../models/userModel.js');
var mongoose = require('mongoose');
var db = require('../db.js')

var userController = {

signupUser: function(req, res) {

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
          imageUrl: imageUrl
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