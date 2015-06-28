# ionic-seed
A modularized ionic seed using ES6 with unit testing.

### Features:
- modular angular structure
- ES6 codebase with Babel transpilation
- separating source and `www` files (the entire www directory is built automatically)
- unit test setup with karma

###Contributions are welcome.

## Prerequisites
Globally available:

- `npm` (recommended to install via `nvm`)
- `cordova`
- `ionic`
- `gulp`
- `ripple` (device emulator for e2e testing with cordova)

## Usage
Run:
`bash <(curl -L https://raw.githubusercontent.com/vekerdyb/ionic-seed/master/grab)`

Clone the repo.

Set your git upstream to your own project. (`git remote set-url upstream [your own git]`)

Use the commands below.

- `bower install` - install bower dependencies
- `npm install` - install dependencies
- `ionic serve` - start dev server
- `gulp test` - run tests once
- `gulp tdd` - run tests continuously, watching for changes
- `gulp e2e` - run end-to-end tests
- `gulp e2e-cordova` - run end-to-end tests that require cordova plugins to be loaded
- `gulp build` - build
- `gulp clean` - clean www/ dir
- `gulp rebuild` - clean + build
- `gulp watch` - watch files for changes
- `gulp config --env [environment setup file]` - set config variables (via gulp-ng-constant)

First time setup:
```
./setup
ionic serve
```

# Credits
This project is a rewrite of the [ionic](http://ionicframework.com/) tabs starter app.  
I learnt most of the cool things used here from [@easyCZ](https://github.com/easyCZ) while working at [@dangerfarms](https://github.com/dangerfarms/).

# Todo:
- controller unit test example
- add linting
- move `lib` to bower_components 
- e2e testing
- set up per file action in `gulp watch` http://stackoverflow.com/questions/22391527/gulps-gulp-watch-not-triggered-for-new-or-deleted-files
- add webpack
- add gulp environment configuration (`gulp config --env xyz`)
- add gulp security header configuration
- ...

See the [issues](https://github.com/vekerdyb/ionic-seed/issues/) for more, or add your own [request](https://github.com/vekerdyb/ionic-seed/issues/new).

# Motivation
While the [ionic framework](http://ionicframework.com/) is a _huge_ help when it comes to building mobile apps fast, but the seed project was developed a while ago, and does not follow best practices in all cases.

### Modular angular structure
The original project groups modules by type (controllers, services, etc.), which is not the best architectural pattern to follow. This project shows an example of how to group your modules by functionality. Obviously modules could have submodules (e.g. the chats module could have a chat-detail submodule), but the current structure is enough to get the idea.

### ES6 codebase
ES6 has many useful features over ES5 (Javascript 5) when it comes to code organization and readability.

### Separating the source from `www`
Having a separate source directory allows autamatic, system dependent configuration of the index.html file, or any other parts of the app for that matter.

### Unit testing
Unit testing is a very basic need in any product development.
