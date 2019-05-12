// Karma configuration
// Generated on Sat May 11 2019 21:30:44 GMT+0800 (GMT+08:00)
const path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'power-assert'],


    // list of files / patterns to load in the browser
    files: [
        './test/index.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // './src/*.js': ['webpack', 'coverage'],
        './test/index.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage-istanbul'],


    // plugins: ['istanbul'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    coverageReporter: {
      dir: './coverage', // 覆盖率结果文件放在 test/coverage 文件夹中
      type: 'html'
    },


    webpack: {
      output: {
        path: __dirname + '/dev',
        filename: '[name].js',
        libraryTarget: 'umd'
      },
      module: {
        rules: [
           {
             test: /\.js$/,
             use: {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
            },
             enforce: 'post',
             include: path.resolve('./test')
           }
         ]
      }
    },


    webpackMiddleware: {
      noInfo: false
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
