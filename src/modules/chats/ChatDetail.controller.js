(() => {

  class ChatDetailController {

    constructor ($stateParams, Chats) {
      this.chat = Chats.get($stateParams.chatId);
    }

  }

  ChatDetailController.$inject = [
    '$stateParams',
    'Chats'
  ];

  let dependencies = [
    'ionic',
    'starter.chats.service'
  ];

  angular
    .module('starter.chats.detail.controller', dependencies)
    .controller('ChatDetailController', ChatDetailController);
})();