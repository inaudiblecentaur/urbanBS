var mongoose = require('mongoose');
var db = require('../db.js');

var GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  gameId: {
    type: Number,
    required: true,
    unique: true
  },

  players: {
    type: Array,
    required: true,
    unique: false
  },

  dealer: {
    type: String,
    required: false
  },

  currentQuestion: {
   type: String,
   required: false
  },

  answer: {
    type: String,
    required: false
  },

  round: {
    type: Number,
    required: false
  },

  invited: {
    type: Array,
    required: false
  },

  roundLimit: {
    type: Number,
    required: true
  },

  isComplete: {
    type:Boolean,
    required: true
  }

});

module.exports = mongoose.model('Game', GameSchema);