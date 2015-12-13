# My Test Task for X1 Group

This is my first test task for X1 Group.
For see the result you can download zip-file and set up the project following instruction below.

## Requirements

Before starting this project you should have installed Node.js at your system, which is required for use streaming build system Gulp. You can download it [here] (https://nodejs.org/en/). Also will use Bower to install Bootstrap and other components needed for our project (FontAwesome, JQuery).

## Quick start

* [Download this project](https://github.com//tramvay4ik/test-x1/archive/master.zip) and unpacked it.
* Open Console in the folder where you want to create your project and run.
* For installing Node modules which are needed for our project (you can see them in "package.json")
```
"devDependencies": {
    "gulp": "^3.9.0",
    "gulp-autoprefixer": "^3.1.0",
    "gulp-bower": "0.0.11",
    "gulp-sass": "^2.1.1"
  }
```
you should run this command:

```
$ npm install --save-dev
```
* Install packages with bower install. Bower installs packages to bower_components/.

```
$ bower install
```
* For buld this project you can run in console:

1. `gulp` - to compile all files (.scss, icons, .js) into build folder
2. `gulp scc` - compile only .scss files
3. `gulp js` - move bootstrap.min.js to exact folder
4. `gulp icons` - move icons to exact folder
5. `gulp watch` - will watch changes at .scss files and automatically recompile them into .css

* Open index.html file in your browser from build folder

## What's included


