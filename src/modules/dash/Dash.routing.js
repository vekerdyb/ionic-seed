(() => {

  let DashRouting = ($stateProvider) => {
    $stateProvider
      .state('dash', {
        parent: 'tab',
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'modules/dash/Dash.html',
            controller: 'DashController as dash'
          }
        }
      })
    ;
  };

  DashRouting.$inject = ['$stateProvider'];
  let dependencies = [
    'ionic'
  ];

  angular.module('starter.dash.routing', dependencies)
    .config(DashRouting)
})();
