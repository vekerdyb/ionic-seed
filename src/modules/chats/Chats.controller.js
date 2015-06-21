(() => {

  class ChatsController {

    constructor(Chats) {
      this.Chats = Chats;
      this.chats = Chats.all();
    }

    remove(chat) {
      this.Chats.remove(chat);
    }
  }

  ChatsController.$inject = [
    'Chats'
  ];

  let dependencies = [
    'starter.chats.service'
  ];

  angular
    .module('starter.chats.controller', dependencies)
    .controller('ChatsController', ChatsController);
})();