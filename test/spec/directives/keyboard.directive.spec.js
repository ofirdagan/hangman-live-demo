'use strict';

describe('Directive: keyboard', function () {

  var element;
  var scope;

  // load the directive's module
  beforeEach(function () {
    module('hangmanAppInternal');
    inject(function ($rootScope) {
      scope = $rootScope.$new();
    });
  });

  it('should compile keyboard', function () {
    compile('<keyboard></keyboard>');
  });

  function compile(template) {
    inject(function ($rootScope, $compile) {
      element = angular.element(template);
      element = $compile(element)(scope);
    });
    scope.$digest();
  }

});
