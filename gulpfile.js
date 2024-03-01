var gulp = require('gulp');
// var watch = require('gulp-watch'); //appCss dagi cssni kuzatadi
const autoprefixer = require('gulp-autoprefixer'); //-webkit qoyish
var csso = require('gulp-csso'); //bir qator qilib beradi
var rename = require("gulp-rename");// .min qilish
var gcmq = require('gulp-group-css-media-queries'); //gulp-group-css-media-queries
// var browserSync = require('browser-sync').create(); // Live serverda ochadi
var plumber = require('gulp-plumber'); //
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less'); // style.less

gulp.task('style',style)
function style(){
    return gulp.src('./app/css/style.css')
    .pipe(autoprefixer({
        browsers: ['last 50 versions'],
        cascade: false
    }))
    .pipe(gcmq())
    .pipe(gulp.dest('./app/appCss/'))
    .pipe(csso())
    .pipe(rename({
        suffix: ".min",
    }))
}