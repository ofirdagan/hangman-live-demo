'use strict';

(function () {

  /* @ngInject */
  function MainController(Game) {
    this.game = new Game('boom');
  }

  angular
    .module('hangmanAppInternal')
    .controller('MainController', MainController);

})();
