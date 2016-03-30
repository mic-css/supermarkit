describe('Service: Auth', function () {
  'use strict';

  var $httpBackend, $rootScope, authService, user;

  beforeEach(module('markpad'));

  beforeEach(inject(function (_$httpBackend_, _$rootScope_, AuthService) {
    $httpBackend  = _$httpBackend_;
    $rootScope    = _$rootScope_;
    authService   = AuthService;
  }));

  beforeEach(function () {
    $httpBackend.whenGET(/views.*/).respond(200, '');
    user = {username: 'Username', password: 'Password'};
  });

  it('user is not logged in by default', function () {
    expect(authService.getUserStatus()).toBe(null);
    expect(authService.isLoggedIn()).toBe(false);
  });

  describe('#login', function () {
    it('logs the user in if successful', function () {
      $httpBackend.expectPOST('/users/login').respond(200, {status: 'Logged in successfully'});
      authService.login(user.username, user.password);

      $httpBackend.flush();
      expect(authService.isLoggedIn()).toBe(true);
      expect(authService.getUserStatus()).toBe(true);
    });

    it('sets isLoggedIn to false if login is unsuccessful', function () {
      $httpBackend.expectPOST('/users/login').respond(500, {status: 'Could not log in user'});
      authService.login('Incorrect', user.password);

      $httpBackend.flush();
      expect(authService.isLoggedIn()).toBe(false);
      expect(authService.getUserStatus()).toBe(false);
    });
  });

  describe('#logout', function () {
    it('logs the user out', function () {
      $httpBackend.expectGET('/users/logout').respond(200, {status: 'Logged out successfully'});
      authService.logout();

      $httpBackend.flush();
      expect(authService.isLoggedIn()).toBe(false);
      expect(authService.getUserStatus()).toBe(false);
    });
  });

  describe('#signup', function () {
    it('sends a POST request with user credentials', function () {
      $httpBackend.expectPOST('/users/signup').respond(200, {status: 'Signed up successfully'});
      authService.signup(user.username, user.password);

      $httpBackend.flush();
    });
  });
});
