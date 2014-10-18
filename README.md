# ReactJS App generator

[![Dependency Status](https://david-dm.org/TudorCampean/generator-reactjs.svg?theme=shields.io)](https://david-dm.org/TudorCampean/generator-reactjs#info=dependencies&view=table)
[![devDependency Status](https://david-dm.org/TudorCampean/generator-reactjs/dev-status.svg?theme=shields.io)](https://david-dm.org/TudorCampean/generator-reactjs#info=devDependencies&view=table)

Yeoman generator that scaffolds out a ReactJS web app.
Based on yeoman/generator-webapp.

## Features

* Built-in preview server with BrowserSync
* Mocha Unit Testing with Karma
* Bootstrap 3.2.0 CSS framework + Bootstrap-Materrial-Design
* Precompiled jsx files in ```./compiled``` folder make it easiear to use them server side.
* Dependency manager - Browserify

Tasks are in a gulp directory in 1-2 task(s) per file rather then a huge file.

## Getting Started

- Install: `npm install -g generator-reactjs`
- Run: `yo reactjs`
- Run `gulp` for preview
- Run `gulp dist` for production distribution
- Run `gulp serve` for distribution preview


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.


## Contribute

Submit a pull request and I'll see what I can do. Thanks!

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
