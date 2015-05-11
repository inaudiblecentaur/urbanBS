var Game = require('../models/gameModel.js');
var mongoose = require('mongoose');
var db = require('../db.js')

var gameController = {
  
createGame: function(req, res) {
  console.log(req.body);
  var name = req.body.name;
  var gameId = req.body.gameId;
  var players = req.body.players || [];
  var dealer = req.body.dealer || 'null';
  var currentQuestion = req.body.currentQuestion || 'null';
  var answer = req.body.answer || 'null';
  var invited = req.body.invited || [];
  var roundLimit = +req.body.roundLimit;

  Game.findOne({ name: name })
    .exec(function(err, game) {
      if (!game) {
        var newGame = new Game({
          name: name,
          players: players,
          dealer: dealer,
          currentQuestion: currentQuestion,
          answer: answer,
          round: 0,
          invited: invited,
          isComplete: false,
          roundLimit: roundLimit
        });
        newGame.save(function(err, newGame) {
          if (err) {
            console.log(err)
            res.send(500, err);
          }
          res.json(newGame)
          res.end()
        });
      } else {
        console.log('Game already exists');
        res.end();
      }
    });
  },

  listGames: function(req, res) {
    Game.find({}, function(err, data) {
      if (!err) { 
        console.log(data)
          res.send(200, data);
      } 
      else {
        throw err;
      }
    });
  },

  invitePlayers: function(req, res) {
    console.log(req.body);
    Game.findOne({name: req.body.name})
    .exec(function(err, game) {
      if (!err) {
        var bool = true;
        game.invited.forEach(function(player) {
          if (!bool) {
            res.end();
            return;
          }
          else if (player.fbId === req.body.fbId) {
            console.log('already invited');
            bool = false;
          }
        });

        if (bool) {
            console.log()
            game.invited.push(req.body);
            res.end();
          }
      }
      else {
        console.log('error inviting player: ' + err);
        res.send(500, err);
      }
    })
  }

};

module.exports = gameController;
