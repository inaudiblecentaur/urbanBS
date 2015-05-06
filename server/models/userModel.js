var mongoose = require('mongoose');
var db = require('../db.js');

var UserSchema = new mongoose.Schema({
  fbId: {
    type: Number,
    required: true,
    unique: true
  },

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: false
  },

  imageUrl: {
    type: String,
    required: false
  }



});


module.exports = mongoose.model('User', UserSchema);