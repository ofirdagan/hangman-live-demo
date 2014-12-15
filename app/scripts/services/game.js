'use strict';

(function () {

  /* @ngInject */
  function gameFactory($rootScope) {

    function Game(word) {
      this.abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

      this.getPhrase = function () {
        return word.split('');
      };

      var guessedChar = [];
      this.revealChar = function (char) {
        guessedChar.push(char);
        $rootScope.$broadcast('charRevealed', char);
      };

      this.wasGuessed = function (char) {
        return guessedChar.indexOf(char) !== -1;
      };
    }
    return Game;
  }

  angular
    .module('hangmanAppInternal')
    .factory('Game', gameFactory);

})();
