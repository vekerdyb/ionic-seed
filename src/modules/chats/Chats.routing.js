(() => {

  let ChatsRouting = ($stateProvider) => {
    $stateProvider
      .state('chats', {
        parent: 'tab',
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'modules/chats/Chats.html',
            controller: 'ChatsController as chats'
          }
        }
      })
      .state('chat-detail', {
        parent: 'tab',
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'modules/chats/ChatDetail.html',
            controller: 'ChatDetailController as chat'
          }
        }
      })
    ;
  };

  ChatsRouting.$inject = ['$stateProvider'];
  let dependencies = [
    'ionic'
  ];

  angular.module('starter.chats.routing', dependencies)
    .config(ChatsRouting)
})();
