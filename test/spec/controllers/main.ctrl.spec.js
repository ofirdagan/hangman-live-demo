'use strict';

describe('Controller: MainController', function () {

  var mainController, scope;

  // load the controller's module
  beforeEach(function () {
    module('hangmanAppInternal');
    module({
      Game: jasmine.createSpy()
    });
    mainController = aMainController();
  });

  it('should hold a game with word = boom', inject(function (Game) {
    expect(mainController.game).toBeDefined();
    expect(Game).toHaveBeenCalledWith('boom');
  }));

  // Initialize the controller and a mock scope
  function aMainController() {
    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      mainController = $controller('MainController', {
        $scope: scope
      });
    });
    return mainController;
  }
});
