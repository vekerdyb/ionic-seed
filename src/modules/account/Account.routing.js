(() => {

  let AccountRouting = ($stateProvider) => {
    $stateProvider
      .state('account', {
        parent: 'tab',
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'modules/account/Account.html',
            controller: 'AccountController as account'
          }
        }
      }
    );
  };

  AccountRouting.$inject = ['$stateProvider'];
  let dependencies = [
    'ionic'
  ];

  angular.module('starter.account.routing', dependencies)
    .config(AccountRouting)
})();
