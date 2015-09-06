var guttle = function (options) {

  var lastArgument = process.argv[process.argv.length - 1];

  var alias = lastArgument.replace('--', '');

  /**
   * Check if lastArgument contains double dashes.
   * If it does, we try to load all files in
   * that option.
   */
   if (lastArgument.indexOf('--') !== -1) {
    return loadByAlias(options, alias);
  } else {
    logError('Missing alias. Unable to load.');
  }
};

var loadByAlias = function (options, alias) {
  try {

    if (typeof options[alias] === 'string') {
      options[alias] = [options[alias]];
    }

    options[alias].forEach(function(filePath) {
      require('./' + filePath);
    });
  } catch (err) {
    logError('Unable to load files in ' + alias);
  }
}

var logError = function (log) {
  var colors = require('colors');
  console.log(colors.red('\n' + 'guttle error' + '\n' + log + '\n'));
}

module.exports = guttle;





