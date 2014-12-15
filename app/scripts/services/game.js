'use strict';

(function () {

  /* @ngInject */
  function gameFactory() {

    function Game() {
    }
    return Game;
  }

  angular
    .module('hangmanAppInternal')
    .factory('Game', gameFactory);

})();
