'use strict';

(function () {

  /* @ngInject */
  function secretChar() {
    return {
    };
  }

  angular
    .module('hangmanAppInternal')
    .directive('secretChar', secretChar);
})();
