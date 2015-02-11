'use strict';

describe('Controller: MainController', function () {

  var mainController, scope;

  // load the controller's module
  beforeEach(function () {
    module('hangmanAppInternal');
    module({
      Game: jasmine.createSpy().andReturn({
        selectLetter: jasmine.createSpy('letterSelected')
      })
    });

    mainController = aMainController();
  });

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

  it('should create a game with a guess word', inject(function (Game) {
    mainController.startNewGame('boom');

    expect(mainController.game).toBeDefined();
    expect(Game).toHaveBeenCalledWith('boom');
  }));

  it('should call selectLetter on letterSelected event', function () {
    mainController.startNewGame('Albert Einstein');

    scope.$broadcast('letterSelected', 'a');

    expect(mainController.game.selectLetter).toHaveBeenCalledWith('a');
  });

});
