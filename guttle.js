var guttle = function (options) {

  var lastArgument = process.argv[process.argv.length - 1];

  var alias = lastArgument.replace('--', '');

  var guttleCalledFrom = module.parent.filename;

  var projectRoot = guttleCalledFrom.substr(0, guttleCalledFrom.lastIndexOf("/")) + '/';

  /**
   * Check if lastArgument contains double dashes.
   * If it does, we try to load all files in
   * that option.
   */
   if (lastArgument.indexOf('--') !== -1) {
    return loadByAlias(options, alias, projectRoot);
  } else {
    logError('Missing alias. Unable to load.');
  }
};

var loadByAlias = function (options, alias, projectRoot) {
  try {

    if (typeof options[alias] === 'string') {
      options[alias] = [options[alias]];
    }

    options[alias].forEach(function(filePath) {
      require(projectRoot + filePath);
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






