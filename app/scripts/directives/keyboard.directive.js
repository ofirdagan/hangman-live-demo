'use strict';

(function () {

  /* @ngInject */
  function keyboard() {
    return {
      templateUrl: 'views/keyboard.view.html',
      restrict: 'E',
      scope: {
        keys: '=',
        wasSelected: '&'
      },
      link: function postLink(scope) {
        scope.onKeyClick = function (key) {
          scope.$emit('letterSelected', key);
        };
        scope.wasSelected = scope.wasSelected();
      }
    };
  }

  angular
    .module('hangmanAppInternal')
    .directive('keyboard', keyboard);
})();
