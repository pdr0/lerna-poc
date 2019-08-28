const path = require("path");
const env = process.env;
const CI = !!(
    env.CI ||
    env.CONTINUOUS_INTEGRATION ||
    env.BUILD_NUMBER ||
    false
);

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["jasmine"],

        // list of files / patterns to load in the browser
        files: [
            "./config/storybook/static/js/decimal.js",
            "./config/storybook/static/js/String.js",
            "./config/storybook/static/js/dla.js",
            "./config/storybook/static/js/messages-dummy.js",
            "./src/test/karma-setup.js",
            "./src/test/**/*.karma.js",
            "./src/test/**/*.karma.ts",
        ],

        webpack: {
            mode: "development",
            devtool: "inline-cheap-module-source-map",
            module: {
                rules: [{
                    test: /\.js$/,
                    use: [
                        "babel-loader"
                    ]
                }, {
                    test: /(?<!\.lit)\.scss$/,
                    use: [
                        "raw-loader",
                        "sass-loader"
                    ]
                }, {
                    test: /\.lit\.scss$/,
                    use: [
                        "@lotto/lit-css-loader",
                        "sass-loader"
                    ]
                }, {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                }, {
                    test: /\.(ts|tsx)$/,
                    use: [
                        {
                            loader: require.resolve("awesome-typescript-loader"),
                            options: {
                                inlineSourceMap: false
                            }
                        }
                    ]
                }, {
                    test: /\.js$|\.jsx$|\.ts|\.tsx/,
                    use: {
                        loader: 'istanbul-instrumenter-loader',
                        options: { esModules: true }
                    },
                    enforce: 'post',
                    exclude: /node_modules|\.karma\.js$|\.karma\.ts/,
                }]
            },
            resolve: {
                extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
            },
            externals: {
                "@lotto/dla": "dla"
            }
        },

        coverageIstanbulReporter: {
            dir: path.join(process.cwd(), "coverage-karma")
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "./src/test/**/*.karma.js": ["webpack", "sourcemap"],
            "./src/test/**/*.karma.ts": ["webpack", "sourcemap"],
        },

        mime: {
            'text/x-typescript': ['ts','tsx']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: CI ? ["teamcity", "coverage-istanbul"] : ["mocha", "coverage-istanbul"],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: !CI,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["ChromeHeadless"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
