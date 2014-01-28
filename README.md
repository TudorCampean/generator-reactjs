# ReactJS App generator

Yeoman generator that scaffolds out a ReactJS web app.
Based on yeoman/generator-webapp and generator-react
## Features

* CSS Autoprefixing (new)
* Built-in preview server with LiveReload
* Automagically lint your scripts
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Mocha Unit Testing with PhantomJS
* Optional - Modernizr 
* Optional - Bootstrap
* Optional - Sass + Compass
* Dependency managers
* Optional - RequireJS AMD support
* Optional - Browserify 
For more information on what `generator-reactjs` can do for you, take a look at the [Grunt tasks](https://github.com/TudorCampean/generator-reactjs/blob/master/app/templates/_package.json) used in `package.json`.

## Getting Started

- Install: `npm install -g generator-reactjs`
- Run: `yo reactjs`
- Run `grunt` for building and `grunt serve` for preview


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--test-framework=<framework>`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.

## Contribute

Submit a pull request and I'll see what I can do. Thanks!

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
