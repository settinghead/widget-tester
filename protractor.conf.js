var seleniumAddress = (process.env.NODE_ENV === 'prod') ? 'http://localhost:4444/wd/hub' : undefined;
if(process.env.SELENIUM_ADDRESS) {
  seleniumAddress = process.env.SELENIUM_ADDRESS;
}
process.env.XUNIT_FILE = 'reports/angular-xunit.xml';
process.env.CHROME_INSTANCES = process.env.CHROME_INSTANCES || 1;
// process.env.MOCHA_REPORTER_FILE = 'reports/anglar.json';
// process.env.MOCHA_REPORTER = 'JSON';

exports.config = {
  allScriptsTimeout: 11000,

  // specs: [
  //   './test/e2e/angular/*.js'
  // ],


  // -----------------------------------------------------------------
  // Browser and Capabilities: Chrome
  // -----------------------------------------------------------------

  // seleniumServerJar: "../node_modules/protractor/selenium/selenium-server-standalone-2.9.248307.jar",
  seleniumAddress: seleniumAddress,
  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY',
    shardTestFiles: true,
    maxInstances: process.env.CHROME_INSTANCES
  },

  framework: 'mocha',

  mochaOpts: {
    reporter: require("xunit-file"),
    enableTimeouts: false,
    slow: 3000
  }

  // onPrepare: function() {
  //   // The require statement must be down here, since jasmine-reporters
  //   // needs jasmine to be in the global and protractor does not guarantee
  //   // this until inside the onPrepare function.
  //   require("jasmine-reporters");
  //   jasmine.getEnv().addReporter(
  //     new jasmine.JUnitXmlReporter('xmloutput', true, true));
  // }
};
