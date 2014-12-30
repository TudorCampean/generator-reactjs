# ReactJS App generator

[![Dependency Status](https://david-dm.org/TudorCampean/generator-reactjs.svg?theme=shields.io)](https://david-dm.org/TudorCampean/generator-reactjs#info=dependencies&view=table)
[![devDependency Status](https://david-dm.org/TudorCampean/generator-reactjs/dev-status.svg?theme=shields.io)](https://david-dm.org/TudorCampean/generator-reactjs#info=devDependencies&view=table)

Yeoman generator that scaffolds out a ReactJS web app.
Based on yeoman/generator-webapp.

## Features

* Built-in preview server with BrowserSync
* Precompiled jsx files in `./compiled` folder make it easiear to use them server side.
* Dependency manager - Browserify

Tasks are in a gulp directory in 1-2 task(s) per file rather then a huge file.

## Includes

##CSS
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Less hat mixins](http://lesshat.madebysource.com/)
* [Bootstrap](http://getbootstrap.com/)
* [Google Font Roboto](https://developers.google.com/fonts/)

##JS
* [Polyfills](http://labs.ft.com/2014/09/polyfills-as-a-service/)
* [JQuery](http://jquery.com/)
* [ReactJS](http://facebook.github.io/react/)

## Getting Started

- Install: `npm install -g generator-reactjs`
- Run: `yo reactjs`
- Run `gulp` for preview
- Run `gulp dist` for production distribution


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.


## Contribute

Submit a pull request and I'll see what I can do. Thanks!

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
