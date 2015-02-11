'use strict';

(function () {

  /* @ngInject */
  function gameFactory() {

    function Game(guessWord) {
      this.guessWord = guessWord;
      this.charactersInLanguage = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var selectedLetters = [];

      this.selectLetter = function (char) {
        selectedLetters.push(char);
      };

      this.isLetterSelected = function (char) {
        return selectedLetters.indexOf(char) !== -1;
      };

      this.getRevealedLettersArray = function () {
        return guessWord.split('').map(function (char) {
          var shouldShowChar = char === ' ' || selectedLetters.indexOf(char) !== -1;
          return shouldShowChar ? char : '_';
        });
      };
    }
    return Game;
  }

  angular
    .module('hangmanAppInternal')
    .factory('Game', gameFactory);

})();
