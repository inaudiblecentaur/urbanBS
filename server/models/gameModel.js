var mongoose = require('mongoose');
var db = require('../db.js');

var Game = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  dealer: {
    type: String,
    required: true
  },

  word: {
  	type: String,
  	required: true
  }

});

module.exports = mongoose.model('Game', GameSchema);
