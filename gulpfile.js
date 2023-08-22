const {src, dest, watch, series, parallel} = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const cleanHTML = require('gulp-cleanhtml');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify-es').default;

function htmlTask(){
    return src('src/**/*.html')
        .pipe(cleanHTML())
        .pipe(browserSync.stream())
        .pipe(dest('.'))
}

function scssTask(){
    return src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(browserSync.stream())
        .pipe(dest('dist'))
}

function jsTask(){
    return src('src/js/**/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(browserSync.stream())
        .pipe(dest('dist'))
}

function imageminTask(){
	return src('src/img/**/*.*')
		.pipe(imagemin())
		.pipe(dest('dist/img'))
}

function clear(){
    return src('dist', { read: false, allowEmpty: true })
        .pipe(clean());
}

function browserTask(){
    browserSync.init({
        server: {
            baseDir: '.'
        }
    })
}

function watchTask(){
    watch('src/**/*.html', htmlTask),
    watch('src/scss/**/*.scss', scssTask),
    watch('src/js/**/*.js', jsTask)
}

exports.build = series(
    clear,
    parallel(htmlTask, scssTask, jsTask, imageminTask)
);

exports.dev = series(
    parallel(watchTask, browserTask)
);