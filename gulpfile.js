'use strict';

var assetsDir = './resources/assets';
var publicDir = './public';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    return gulp.watch(assetsDir + '/sass/**/*.scss', function () {
        console.log("[" + new Date().toUTCString() + "] " + "Detected file changes, running default tasks...");
        return gulp.src(assetsDir + '/sass/app.scss')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(sourcemaps.write('/'))
            .pipe(plumber.stop())
            .pipe(gulp.dest(publicDir + '/css'));
    })
});

gulp.task('sass', function () {
    return gulp.src(assetsDir + '/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write(publicDir + '/css'))
        .pipe(gulp.dest('./'));
});