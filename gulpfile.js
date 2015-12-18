var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var DESTDIR = 'dest/';

gulp.task('copy:reveal', function() {
  return gulp.src([
    'bower_components/reveal.js/css/**/*.*',
    'bower_components/reveal.js/js/**/*.*',
    'bower_components/reveal.js/lib/**/*.*',
    'bower_components/reveal.js/plugin/**/*.*'
  ],
  { base: 'bower_components/reveal.js/' })
  .pipe(gulp.dest(DESTDIR+'lib/reveal'));
});

gulp.task('copy:html',['copy:reveal'],function() {
  return gulp.src('presentation/src/**/*.html')
    .pipe(gulp.dest(DESTDIR));
});

gulp.task('copy:img',['copy:html'], function() {
  return gulp.src('presentation/img/**/*.*')
    .pipe(gulp.dest(DESTDIR+'img'));
});


gulp.task('browser-sync', ['copy:img'], function() {
    browserSync({
        server: {
            baseDir: 'dest/'
        }
    });
});

gulp.task('browser-sync:demo', function() {
    browserSync({
        server: {
            baseDir: 'dest/demo/'
        }
    });
});

gulp.task('watch', function() {
  gulp.watch('presentation/src/**/*.*',['copy:img']);
});


gulp.task('default',['browser-sync','watch']);
