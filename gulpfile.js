var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util')
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');


gulp.task('templates', function() {
    return gulp
        .src('src/jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dist/views/'))
        .on('error', function() {
            console.log('There was an error parsing jade to html. Waiting for changes ...');
        });
});

gulp.task('css', function() {
    return gulp
        .src('src/stylus/style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist/styles/'))
        .on('error', function() {
            console.log('There was an error parsing stylus to css. Waiting for changes ...');
        });
});


gulp.task('scripts', function() {
    return gulp
        .src('src/scripts/**/*.js')
        .pipe(gulp.dest('dist/scripts/'))
        .on('error', function() {
            console.log('There was an error copying files to dist folder ...');
        });
});


gulp.task('watch', function() {
    gulp.watch('src/stylus/*.styl', ['css']);
    gulp.watch('src/jade/**/*.jade', ['templates']);
    gulp.watch('src/scripts/**/*.js', ['scripts'])
});


gulp.task('develop', ['templates', 'css', 'watch']);
