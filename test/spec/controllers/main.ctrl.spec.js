'use strict';

describe('Controller: MainController', function () {

  var mainController, scope;

  // load the controller's module
  beforeEach(function () {
    module('hangmanAppInternal');
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
});
