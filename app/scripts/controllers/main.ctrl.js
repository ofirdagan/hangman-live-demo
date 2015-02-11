'use strict';

(function () {

  /* @ngInject */
  function MainController(Game, $scope, hangmanEvents) {
    this.startNewGame = function (guessWord) {
      this.game = new Game(guessWord);
    };
    var self = this;
    $scope.$on(hangmanEvents.letterSelected, function (event, letter) {
      self.game.selectLetter(letter);
    });

  }

  angular
    .module('hangmanAppInternal')
    .controller('MainController', MainController);

})();
