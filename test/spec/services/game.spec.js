'use strict';

describe('Service: game', function () {

  // load the service's module
  beforeEach(function () {
    module('hangmanAppInternal');
  });

  it('a dummy test', function () {
    aGame('');
  });

  // instantiate service
  function aGame(secret) {
    var game;
    inject(function (Game) {
      game = new Game(secret);
    });
    return game;
  }

});
