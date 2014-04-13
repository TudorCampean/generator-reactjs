# ReactJS App generator

[![Dependency Status](https://david-dm.org/TudorCampean/generator-reactjs.svg?theme=shields.io)](https://david-dm.org/TudorCampean/generator-reactjs#info=dependencies&view=table)
[![devDependency Status](https://david-dm.org/TudorCampean/generator-reactjs/dev-status.svg?theme=shields.io)](https://david-dm.org/TudorCampean/generator-reactjs#info=devDependencies&view=table)

Yeoman generator that scaffolds out a ReactJS web app.
Based on yeoman/generator-webapp.

## Features

* CSS Autoprefixing (new)
* Built-in preview server with LiveReload
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Mocha Unit Testing with Karma
* Bootstrap 3 CSS framework
* Dependency manager - Browserify

For more information on what `generator-reactjs` can do for you, take a look at the [Grunt tasks](https://github.com/TudorCampean/generator-reactjs/blob/master/app/templates/_package.json) used in `package.json`.

## Getting Started

- Install: `npm install -g generator-reactjs`
- Run: `yo reactjs`
- Run `grunt build` for building and `grunt serve` for preview

## Test your components

- Run `grunt karma` in a separate window for tests

Test are written in coffescript because they look better.
You can use JSX in coffescript by adding ` ` `
Not exactly stable but if you keep them in the current format it should work.(globals in tests do not work with this)

## Component

- Run: `yo reactjs:component {name}` to create a component with that name and simple test case for it.
This works for 'path/to/name'


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.


## Contribute

Submit a pull request and I'll see what I can do. Thanks!

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
