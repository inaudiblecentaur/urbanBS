

var gameList = [
    {name: "Ray's game", id: 0, players: ['henry', 'raymond', 'kyle', 'kir'], currentQuestion: null, round: 0, roundLimit: null},
    {name: "Kyle's game", id: 1, players: [], currentQuestion: null, round: 0, roundLimit: null},
    {name: "Kir's game", id: 2, players: [], currentQuestion: null, round: 0, roundLimit: null},
    {name: "Henry's game", id: 3, players: [], currentQuestion: null, round: 0, roundLimit: null}
  ];

  var gameInvites = [
      {name: "Henry", id: 1, gameId: 5},
      {name: "Kyle", id: 2, gameId: 6}
    ];

exports.findAll = function (req, res, next) {
    console.log(res + 'yo')
    res.send(gameList);
};

exports.getInvites = function(req, res) {
  res.send(gameInvites);
}

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(gameList[id]);
};