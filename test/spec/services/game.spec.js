'use strict';

describe('Service: game', function () {

  // load the service's module
  beforeEach(function () {
    module('hangmanAppInternal');
  });

  it('should have a guess word', function () {
    var game = aGame('amsterdam');
    expect(game.guessWord).toBe('amsterdam');
  });

  it('should have the characters in language', function () {
    var game = aGame();

    expect(game.charactersInLanguage).toEqual('abcdefghijklmnopqrstuvwxyz'.split(''));
  });

  it('should select letters', inject(function () {
    //given
    var game = aGame('Chazz Michael Michaels');

    //when
    game.selectLetter('a');

    //then
    expect(game.isLetterSelected('a')).toBe(true);
    expect(game.isLetterSelected('i')).toBe(false);
  }));

  it('should return the guess word in its current status', function () {
    var game = aGame('amsterdam');

    expect(game.getRevealedLettersArray()).toEqual('_________'.split(''));

    game.selectLetter('a');
    expect(game.getRevealedLettersArray()).toEqual('a______a_'.split(''));

    game.selectLetter('o');
    expect(game.getRevealedLettersArray()).toEqual('a______a_'.split(''));

    game.selectLetter('t');
    expect(game.getRevealedLettersArray()).toEqual('a__t___a_'.split(''));

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
