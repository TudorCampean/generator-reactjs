# ReactJS App generator

[![Dependency Status](https://david-dm.org/TudorCampean/generator-reactjs.svg?theme=shields.io)](https://david-dm.org/TudorCampean/generator-reactjs#info=dependencies&view=table)
[![devDependency Status](https://david-dm.org/TudorCampean/generator-reactjs/dev-status.svg?theme=shields.io)](https://david-dm.org/TudorCampean/generator-reactjs#info=devDependencies&view=table)

Yeoman generator that scaffolds out a ReactJS web app.
Based on yeoman/generator-webapp.

## Features

* CSS Autoprefixing (new)
* Built-in preview server with LiveReload
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Mocha Unit Testing with PhantomJS
* Bootstrap
* Dependency managers
*  Browserify
For more information on what `generator-reactjs` can do for you, take a look at the [Grunt tasks](https://github.com/TudorCampean/generator-reactjs/blob/master/app/templates/_package.json) used in `package.json`.

## Getting Started

- Install: `npm install -g generator-reactjs`
- Run: `yo reactjs`
- Run `grunt` for building and `grunt serve` for preview


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.


## Contribute

Submit a pull request and I'll see what I can do. Thanks!

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
