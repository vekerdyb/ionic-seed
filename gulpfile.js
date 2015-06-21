var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var watch = require('gulp-watch');

var paths = {
  destBase: 'www/',
  sass: ['src/ionic.app.scss'],
  images: ['src/img/**/*'],
  lib: ['src/lib/**/*'],
  templates: ['src/**/*.html'],
  scripts: ['src/**/*.js', '!src/**/*.spec.js', '!src/lib/**/*']
};

gulp.task('default', ['build']);

gulp.task('build', ['images', 'sass', 'lib', 'templates', 'scripts'])

gulp.task('clean', function (done) {
  del(['www/**/*'], done);
});

gulp.task('rebuild', ['clean'], function (done) {
  gulp.start('build');
});

gulp.task('sass', function (done) {
  gulp.src(paths.sass)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.destBase))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(paths.destBase))
    .on('end', done);
});

gulp.task('images', function (done) {
  gulp.src(paths.images)
    .pipe(gulp.dest(paths.destBase + 'img/'))
    .on('end', done)
});

gulp.task('lib', function (done) {
  gulp.src(paths.lib)
    .pipe(gulp.dest(paths.destBase + 'lib/'))
    .on('end', done)
});

gulp.task('templates', function (done) {
  gulp.src(paths.templates)
    .pipe(gulp.dest(paths.destBase))
    .on('end', done)
});

gulp.task('scripts', function (done) {
  gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .on('error', function (err) {
      console.log('[scripts] Error: ' + err.message);
    })
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.destBase))
    .on('end', done);
});

gulp.task('watch', function () {
  watch(paths.templates, function () {
    gulp.start('templates')
  });
  watch(paths.scripts, function () {
    gulp.start('scripts')
  });
  watch(paths.images, function () {
    gulp.start('images')
  });
  watch(paths.sass, function () {
    gulp.start('sass')
  });
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
