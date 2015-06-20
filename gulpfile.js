'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css');

gulp.task('less', function() {
  gulp.src('assets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('assets/style'))
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/less/*.less', ['less']);
});

gulp.task('browserify', function() {
    return browserify('assets/script/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/script'));
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
        .pipe(gulp.dest('public/style/'));
});

gulp.task('css', ['less'], function() {
    return gulp.src(['assets/style/*.css'])
        .pipe(concat('app.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/style/'));
});

gulp.task('dev', ['browserify', 'concatcss']);
gulp.task('build', ['script', 'css']);

gulp.task('default', ['dev']);