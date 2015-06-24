require('babel/register');

exports.config = {
  capabilities: {
    // You can use other browsers
    // like firefox, phantoms, safari, IE (-_-)
    'browserName': 'chrome'
  },
  specs: [
    '../src/modules/starter-app-e2e.spec.js'
  ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
  },
  seleniumServerJar: '../node_modules/webdriver-manager/selenium/selenium-server-standalone-2.46.0.jar',
  chromeDriver: '../node_modules/webdriver-manager/selenium/chromedriver',

  allScriptsTimeout: 20000,
  onPrepare: function(){
    browser.driver.get('http://localhost:3000');
  }
};
