require('babel/register');

exports.config = {
  capabilities: {
    // You can use other browsers
    // like firefox, phantoms, safari, IE (-_-)
    'browserName': 'chrome'
  },
  specs: [
    '../src/modules/starter-app-e2e-cordova.spec.js'
  ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
  },

  seleniumServerJar: 'selenium-server-standalone.jar',
  chromeDriver: 'chromedriver',

  allScriptsTimeout: 20000,
  onPrepare: function(){
    browser.driver.manage().window().maximize();
    browser.driver.get('http://localhost:4400/?enableripple=cordova-5.0.0-iPhone5');
    // Enable this if you get syntonization errors from protractor,
    // var ptor = protractor.getInstance();
    // ptor.ignoreSynchronization = true;

    // Allow ripple to load
    browser.sleep(2000);
    browser.driver.switchTo().frame(0);
  }
};
