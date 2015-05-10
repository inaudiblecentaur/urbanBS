var Question = require('../models/questionModel.js');
var mongoose = require('mongoose');
var db = require('../db.js')

var gameController = {

currentQuestion: 'hi mom',
count: 0,
  
getQuestion: function(req, res) {
  console.log(req.body);
  Question.findOne({questionId: count}, function(err, data) {
      if (!err) { 
        console.log(data);
        console.log(this.currentQuestion)
        res.send(200, data);
      } 
      else {
        console.log(err);
        throw err;
      }
    });
  },

  submitAnswer: function(req, res) {   
    console.log(req.body);
    this.currentQuestion.submittedAnswer = req.body.submittedAnswer;
    res.end();
  },

  getAnswer: function(req, res) {
    console.log(req.body);
    var submittedAnswer = this.currentQuestion.submittedAnswer;
    this.currentQuestion.submittedAnswer = null;
    this.count++;
    res.send(200, submittedAnswer || this.currentQuestion.answer);
  },

  endGame: function(req, res) {
    this.currentQuestion = null;
    this.count = 0;
    res.end();
  }

};

module.exports = gameController;