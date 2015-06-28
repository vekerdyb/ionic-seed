module.exports = {
  browsers: ['PhantomJS'],
  frameworks: ['jasmine', 'es6-shim'],
  files: [
    // Libs
    {pattern: 'bower_components/angular/angular.js', watch: false},
    {pattern: 'bower_components/ionic/js/ionic.bundle.js', watch: false},
    {pattern: 'bower_components/angular-mocks/angular-mocks.js', watch: false},

    //{pattern: 'bower_components/**/*.js', watch: false},
    //{pattern: 'src/lib/**/*.js', watch: false},

    // Scripts
    'src/modules/**/*.js',

    // Templates
    'src/modules/**/*.html'
  ],

  exclude: [],

  reporters: ['dots', 'coverage'],

  preprocessors: {
    'src/modules/**/*.js': ['babel'],
    'src/modules/**/*[!spec].js': ['babel', 'coverage'],
    'src/modules/**/*.html': ['ng-html2js'],
  },

  babelPreprocessor: {
    options: {
      sourceMap: 'inline'
    }
  },


  // optionally, configure the reporter
  coverageReporter: {
    reporters: [
      {
        type : 'html',
        dir : 'coverage/html',
        subdir: '.'
      },
      {
        type: 'text-summary',
        dir: 'coverage/text'
      }
    ]
  },

  // Configure template pre-loader.
  // including module('templates') in tests
  // allows to use external templates in directive tests
  ngHtml2JsPreprocessor: {
    moduleName: 'templates',
    stripPrefix: 'src/'
  }
};
