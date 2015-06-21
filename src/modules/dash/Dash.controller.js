(() => {

  class DashController {

    constructor($scope) {
      this.$scope = $scope;
    }
  }

  angular
    .module('starter.dash.controller', [])
    .controller('DashController', DashController);
})();