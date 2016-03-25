var mongoose = require('mongoose');
var ctrl = require('../app/controllers/signUpController.js');

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
    expect(ctrl.controller).toBeDefined();
  });

  it('passes a create call to the user model', function(){
    var user = jasmine.createSpy().and.returnValue(undefined);
    ctrl.store();
    expect(user.create).toHaveBeenCalled();
  });
});
