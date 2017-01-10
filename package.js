Package.describe({
  name: 'bryanmorgan:webshot',
  version: '1.0.0',
  summary: 'Save web page screenshots using node-webshot',
  git: 'http://github.com/BryanMorgan/webshot',
  documentation: 'README.md'
});

Npm.depends({
  'webshot': '0.18.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('lib/webshot.js', 'server');
  api.export('webshot', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bryanmorgan:webshot');
  api.addFiles('tests/webshot-tests.js', 'server');
});

