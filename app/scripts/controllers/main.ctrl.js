'use strict';

(function () {

  /* @ngInject */
  function MainController(Game, $scope) {
    var self = this;
    this.startNewGame = function (guessWord) {
      this.game = new Game(guessWord);
    };

    $scope.$on('letterSelected', function (event, letter) {
      self.game.selectLetter(letter);
    });
  }

  angular
    .module('hangmanAppInternal')
    .controller('MainController', MainController);

})();
