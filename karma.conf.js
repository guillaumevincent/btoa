module.exports = function(config) {
  config.set({
    basePath: ".",
    frameworks: ["browserify", "mocha"],
    files: ["browser-btoa.js", "test.js"],
    exclude: [],
    preprocessors: {
      "test.js": ["browserify"]
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["Firefox", "Chrome"],
    singleRun: true,
    concurrency: Infinity
  });
};
