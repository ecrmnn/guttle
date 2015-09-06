# guttle

[![Build Status](https://travis-ci.org/ecrmnn/guttle.svg?branch=master)](https://travis-ci.org/ecrmnn/guttle)
[![npm version](https://img.shields.io/npm/dm/guttle.svg)](http://badge.fury.io/js/guttle)
[![npm version](https://img.shields.io/npm/v/guttle.svg)](http://badge.fury.io/js/guttle)
[![npm version](https://img.shields.io/npm/l/guttle.svg)](http://badge.fury.io/js/guttle)

Multiple gulp builds with ease

### What is guttle?
Guttle is a tool for managing gulp builds. Normally you would have your ``gulpfile.js`` and everything is fine. But sometimes you want two or maybe three completely different builds. Wouldn't it be great if you could have a ``gulpfile.js`` for your app frontend and a different ``gulpfile.js`` for your backend/adminpanel? With ``guttle`` you can!

### Installation
Simply install ``guttle`` using npm in your gulp-based project
```shell
npm install guttle --save-dev
```

### Usage
So we want to have a build for our app frontend and our app backend/adminpanel. To separate these build processes you would simply do this in your ``gulpfile.js``

#### Two separate gulpfiles
**In your ``gulpfile.js`` on project root**
```javascript
// gulpfile.js
var guttle = require('guttle');

guttle({
  frontend: 'assets/frontend/gulpfile',
  adminpanel: 'assets/admin/gulpfile'
});
```
**Trigger specific build from CLI**
```shell
# Trigger default gulp task in 'assets/frontend/gulpfile.js'
gulp --frontend

# Trigger specific gulp task in 'assets/admin/gulpfile.js'
gulp watch --adminpanel
```

#### Splitting tasks into separate files
**In your ``gulpfile.js`` on project root**
```javascript
// gulpfile.js
var guttle = require('guttle');

guttle({
  frontend: [
    'assets/frontend/tasks/default',
    'assets/frontend/tasks/watch',
    'assets/frontend/tasks/sprites',
    'assets/frontend/tasks/image',
    'assets/frontend/tasks/svg',
  ],
  adminpanel: 'assets/admin/allTheTasks.js' /* Adding .js is optional */
});
```
**Trigger from CLI**
```shell
# Trigger default gulp task in 'assets/frontend/tasks/default'
gulp --frontend

# Trigger sprites task in 'assets/frontend/tasks/default'
gulp sprites --frontend

# Trigger specific gulp task in 'assets/admin/gulpfile.js'
gulp watch --adminpanel
```