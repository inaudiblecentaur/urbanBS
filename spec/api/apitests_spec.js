var request = require('request');

it("Should respond with 200 code to a GET request", function(done) {
  request("http://localhost:3000", function(error, response, body) {
    expect(body).toEqual("");
    done();
  });
});

it("Should response with an object to a POST request", function(done) {
  request.post("http://localhost:3000").form({username: 'testuser', password: 'testpass'});
  done();
});