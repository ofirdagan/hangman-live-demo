'use strict';

describe('Service: game', function () {

  // load the service's module
  beforeEach(function () {
    module('hangmanAppInternal');

    //add your mocks here
  });

  var game;

  // instantiate service
  function aGame(word) {
    inject(function (Game) {
      game = new Game(word);
    });
  }

  it('should return the phrase in an array', function () {
    aGame('google campus');

    expect(game.getPhrase()).toEqual('google campus'.split(''));
  });

  it('should have the abc', function () {
    aGame('');

    expect(game.abc).toEqual('abcdefghijklmnopqrstuvwxyz'.split(''));
  });

  it('should reveal letters', inject(function ($rootScope) {
    //given
    aGame('Chazz Michael Michaels');
    var eventSpy = jasmine.createSpy('event spy');
    $rootScope.$on('charRevealed', eventSpy);

    //when
    game.revealChar('a');

    //then
    expect(game.wasGuessed('a')).toBe(true);
    expect(game.wasGuessed('i')).toBe(false);
    expect(eventSpy).toHaveBeenCalledWith(jasmine.any(Object), 'a');
  }));

});
