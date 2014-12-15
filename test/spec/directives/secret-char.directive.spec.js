'use strict';

describe('Directive: secretChar', function () {

  // load the directive's module
  beforeEach(function () {
    module('hangmanAppInternal');
  });

  var element,
    scope;

  function compile(char) {
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<secret-char value="' + char + '"></secret-char>');
      element = $compile(element)(scope);
    });
    scope.$digest();
  }

  it('should not be revealed as default', inject(function () {
    compile('a');

    expect(element.isolateScope().isRevealed).toBe(false);
  }));

  it('should not be revealed in case of wrong char revealed event', inject(function () {
    //given
    compile('a');

    //when
    scope.$broadcast('charRevealed', 'b');

    //then
    expect(element.isolateScope().isRevealed).toBe(false);
  }));

  it('should be revealed in case of right char revealed event', inject(function () {
    //given
    compile('a');

    //when
    scope.$broadcast('charRevealed', 'a');

    //then
    expect(element.isolateScope().isRevealed).toBe(true);
  }));

});
