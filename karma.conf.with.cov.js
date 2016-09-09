module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: "../",

        frameworks: ["jasmine", "requirejs"],

        // list of files / patterns to load in the browser
        files: [
            "test/karma-main.js",
            {pattern: "modules/*.js", included: false},
            {pattern: "test/specs/*.js", included: false},
            {pattern: "test/specs/mocks/*.js", included: false},
            {pattern: "test/lib/*.js", included: false}
        ],

        // list of files to exclude
        exclude: ["modules/pre.js, modules/post.js, test/specs/*_prod.js"],

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari
        // - PhantomJS
        browsers: ["PhantomJS"],

        preprocessors: {
            "**/**/modules/!(pre|post).js": "coverage"
        },

        coverageReporter: {
            type : "lcov",
            dir : "./coverage/"
        },

        // test results reporter to use
        // possible values: dots || progress
        reporters: ["junit", "progress", "coverage"],
        colors: true,

        // web server port
        port: 9876,

        // cli runner port
        runnerPort: 9100,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: false,

        // if true, it capture browsers, run tests and exit
        singleRun: true,

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000
    });
};