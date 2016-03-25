'use strict';

var mongoose = require('mongoose');
var request = require("request");


var URL = 'http://localhost:3000/notes/'

beforeEach(function() {
  mongoose.connect('mongodb://localhost/markpad-test', function() {
    mongoose.connection.db.dropDatabase();
  });
});

afterAll(function() {
  mongoose.connect('mongodb://localhost/markpad-test', function() {
    mongoose.connection.db.dropDatabase();
  });
});

req = request('http://localhost:3000');

describe("Notes API Server", function(){
  describe('post note /notes', function(){

    it("returns 200 status code", function(done){
      request.post("http://localhost:3000/notes", function(error, response, body){
        expect(response.statusCode).toBe(200);
        expect(response).toBe(application/json)
        done();
      });
    });

    it("responds with json", function(done){
      app.post('/notes', function(req, res){
        res.status(200).json({ title: 'something' });
      });

      req(app)
        .get('/notes')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(200)
        .end(function(err, res){
          if (err) throw err;
        });
    });
  });
});
