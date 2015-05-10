var mongoose = require('mongoose');
var db = require('../db.js');

var QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },

  answer: {
    type: String,
    required: true
  },

  submittedAnswer: {
    type: String,
    required: false
  },

  questionId: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Question', QuestionSchema);