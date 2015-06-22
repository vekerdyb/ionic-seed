# ionic-seed
A modularized angular ionic seed, using ES6.

###Contributions welcome.

## Features:
- modular angular structure
- ES6 support
- separating source and built files
- unit tests with karma

## Todo:
- e2e testing
- set up per file action in `gulp watch` http://stackoverflow.com/questions/22391527/gulps-gulp-watch-not-triggered-for-new-or-deleted-files
- add webpack

## Usage
`bower install` - install bower dependencies
`npm install` - install dependencies
`ionic serve` - start dev server

`gulp test` - run tests once
`gulp tdd` - run tests continuously, watching for changes

`gulp build` - build
`gulp clean` - clean www/ dir
`gulp rebuild` - clean + build
`gulp watch` - watch files for changes

First time setup:
```
bower install
npm install
gulp build
gulp test
ionic serve
```

or simply:
```
./setup
ionic serve
```
