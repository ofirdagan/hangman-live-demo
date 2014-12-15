'use strict';

(function () {

  /* @ngInject */
  function secretChar() {
    return {
      templateUrl: 'views/secret-char.view.html',
      restrict: 'E',
      scope: {
        value: '@'
      },
      link: function postLink(scope) {
        scope.isRevealed = false;

        scope.$on('charRevealed', function (event, char) {
          scope.isRevealed = scope.isRevealed || char === scope.value;
        });
      }
    };
  }

  angular
    .module('hangmanAppInternal')
    .directive('secretChar', secretChar);

})();
