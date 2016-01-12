'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    replace = require('gulp-replace');

gulp.task('less', function() {
  gulp.src('assets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('assets/style'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/less/*.less', ['concatcss']);
    gulp.watch('assets/script/*.js', ['browserify']);
});

gulp.task('browserify', function() {
    return browserify('assets/script/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/script'))
        .pipe(livereload());
});

var backend = 'http://quiet-atoll-8237.herokuapp.com';

gulp.task('prepareConfig', function() {
    gulp.src(['assets/templates/config.js'])
    .pipe(replace(/#backend#/g, 'http://localhost:8100'))
    .pipe(gulp.dest('assets/script/'));
});

gulp.task('prepareStaging', function() {
    gulp.src(['assets/templates/config.js'])
    .pipe(replace(/#backend#/g, 'http://192.168.99.100:8000'))
    .pipe(gulp.dest('assets/script/'));
});

gulp.task('prepareRelease', function() {
    gulp.src(['assets/templates/config.js'])
    .pipe(replace(/#backend#/g, backend))
    .pipe(gulp.dest('assets/script/'));
});

gulp.task('script', ['browserify'], function() {
    return gulp.src('public/script/app.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/script'));
});

gulp.task('concatcss', ['less'], function() {
    return gulp.src(['assets/style/*.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('public/style/'))
        .pipe(livereload());
});

gulp.task('css', ['less'], function() {
    return gulp.src(['assets/style/*.css'])
        .pipe(concat('app.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/style/'));
});

gulp.task('dev', ['prepareConfig', 'browserify', 'concatcss']);
gulp.task('build', ['prepareConfig', 'script', 'css']);
gulp.task('staging', ['prepareStaging', 'script', 'css']);
gulp.task('release', ['prepareRelease', 'script', 'css']);

gulp.task('default', ['dev']);
