

var gameList = [
    {name: "Ray's game", gameId: 0, players: [], currentQuestion: null, round: 0, roundLimit: null, dealer: null},
    {name: "Kyle's game", gameId: 1, players: [], currentQuestion: null, round: 0, roundLimit: null, dealer: null},
    {name: "Kir's game", gameId: 2, players: [], currentQuestion: null, round: 0, roundLimit: null, dealer: null},
    {name: "Henry's game", gameId: 3, players: [], currentQuestion: null, round: 0, roundLimit: null, dealer: null}
  ];

  var gameInvites = [
      {name: "Henry", id: 1, gameId: 2},
      {name: "Kyle", id: 2, gameId: 3}
    ];

exports.findAll = function (req, res, next) {
    res.send(gameList);
};

exports.getInvites = function(req, res, next) {
  console.log('getting invites')
  res.send(gameInvites);
}

exports.addInvites = function(req, res, next) {
  gameInvites.push(req.body)
}

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(gameList[id]);
};