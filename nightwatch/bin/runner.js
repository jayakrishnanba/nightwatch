/**
 * Module dependencies
 */
var Nightwatch = require('C:/Project/nightwatch/lib/index.js');
var Utils = require('C:/Project/nightwatch/lib/util/utils.js');

try {
  Nightwatch.cli(function(argv) {
    argv._source = argv['_'].slice(0);
    Nightwatch.runner(argv);
  });
} catch (ex) {
  Utils.showStackTraceWithHeadline('There was an error while starting the test runner:\n', ex.stack + '\n', true);
  process.exit(2);
}
