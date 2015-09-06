/**
 * This file is for testing with Travis CI only.
 * You should not use this file. 
 */

var guttle = require('../guttle');

guttle({
  awesome: 'files/awesome',
  sample: [
    'tests/files/sample',
    'tests/files/sample2',
    'tests/files/sample3'
  ]
});