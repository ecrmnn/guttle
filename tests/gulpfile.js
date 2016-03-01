/**
 * This file is for testing with Travis CI only.
 * You should not use this file. 
 */

const guttle = require('../guttle');

guttle({
  awesome: 'files/awesome',
  sample: [
    'files/sample',
    'files/sample2',
    'files/sample3'
  ]
});