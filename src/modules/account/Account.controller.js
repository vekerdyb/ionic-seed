(() => {

  class AccountController {

    constructor() {
      this.settings = {enableFriends: true};
    }

  }

  angular
    .module('starter.account.controller', [])
    .controller('AccountController', AccountController);
})();