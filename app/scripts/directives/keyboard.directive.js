'use strict';

(function () {

  /* @ngInject */
  function keyboard() {
    return {
    };
  }

  angular
    .module('hangmanAppInternal')
    .directive('keyboard', keyboard);
})();
