var mongoose = require('mongoose');
var ctrl = require('../app/controllers/signUpController.js');
var controller = ctrl.controller;

describe('signUpController', function(){

  beforeEach(function(){
    mongoose.connect('mongodb://localhost/markpad-test', function(){
      mongoose.connection.db.dropDatabase();
    });
  });

  afterEach(function(){
    mongoose.connect('mongodb://localhost/markpad-test', function(){
      mongoose.connection.db.dropDatabase();
    });
  });

  it('exists', function(){
    console.log(ctrl.controller);
    expect(controller).toBeDefined();
  });

  it('passes a create call to the user model', function(){
    var user = jasmine.createSpy();
    ctrl.store();
    expect(user.create).toHaveBeenCalled();
  });
});
