const chai = require('chai');
const expect = require('chai').expect;
const exec = require("child_process").exec;

describe('Run "gulp"', function () {
  before(function (done) {
    exec('cd tests/ && gulp', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('Should return error; Missing alias', function () {
    expect(captured_stdout).to.contain('Missing alias. Unable to load.');
  });
});

describe('Run "gulp watch"', function () {
  before(function (done) {
    exec('cd tests/ && gulp watch', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('Should return error; Missing alias', function () {
    expect(captured_stdout).to.contain('Missing alias. Unable to load.');
  });
});

describe('Run "gulp --sample"', function () {
  before(function (done) {
    exec('cd tests/ && gulp --sample', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('Should run default task in [options.sample]', function () {
    expect(captured_stdout).to.contain('Running default task from sample.js');
  });

  it('Should load all files from array', function () {
    expect(captured_stdout).to.contain('Sample2.js loaded' + '\n' + 'Sample3.js loaded');
  });
});

describe('Run "gulp svg --sample"', function () {
  before(function (done) {
    exec('cd tests/ && gulp svg --sample', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('Should run svg task in [options.sample]', function () {
    expect(captured_stdout).to.contain('Running svg task from sample.js');
  });
});