const gulp = require('gulp');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const del = require('del');
const zip = require('gulp-zip');

// Image compression
const imagemin = require('gulp-imagemin');
const imageminPnguant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

// Filepaths
const DIST_PATH = 'public/dist';
const SCRIPTS_PATH = 'production/scripts/**/*.js';
const CSS_PATH = 'production/css/**/*.css';
const VIEWS_PATH = 'production/views/**/*.html';
const IMAGES_PATH = 'production/images/**/*.{png,jpeg,jpg,svg,gif}';

gulp.task('views', function() {
    console.log('Starting views task');
    return gulp.src(VIEWS_PATH)
        .pipe(gulp.dest('public/'))
        .pipe(livereload());
});

// Styles
gulp.task('styles', function() {
    console.log('Starting styles task');
    return gulp.src([CSS_PATH]) // Edit this to separate css files
        .pipe(plumber(function(err) {
            console.log('Styles Task Error: ');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

// scripts
gulp.task('scripts', function() {
    console.log('Starting scripts task');

    return gulp.src(SCRIPTS_PATH)
        .pipe(plumber(function(err){
            console.log('Scripts Task Error: ');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

// Images
gulp.task('images', function() {
    console.log('Starting images task');

    return gulp.src(IMAGES_PATH)
        .pipe(imagemin(
            [
                imagemin.gifsicle(),
                imagemin.jpegtran(),
                imagemin.optipng(),
                imagemin.svgo(),
                imageminPnguant(),
                imageminJpegRecompress()
            ]
        ))
        .pipe(gulp.dest(DIST_PATH + '/images'));
});

// Clean
// Errors arise when deleting parent folders
gulp.task('clean', () => del([DIST_PATH+'/**', DIST_PATH+'/images/**', '!'+DIST_PATH+'/images', '!'+DIST_PATH+'/libs/**', 'public/index.html', '!'+DIST_PATH], {dot: true, force: true, read: false}));

// Default
gulp.task('default', ['clean', 'images', 'views', 'styles', 'scripts'], function() {
    console.log('Starting defaults task');
});

// Export
gulp.task('export', function() {
    var date = new Date();
    var timestamp = `${date.getHours()+1}.${date.getMinutes()}--${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;

    return gulp.src('public/**/*')
        .pipe(zip(`website(${timestamp}).zip`))
        .pipe(gulp.dest('./exports/'));
});

gulp.task('backup', function() {
    var date = new Date();
    var timestamp = `${date.getHours()+1}.${date.getMinutes()}--${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;

    return gulp.src(['./**/*', '!node_modules/**/*', '!BackUps/**/*', '!public/dist/**/*'], '!public/index.html')
        .pipe(zip(`Backup(${timestamp}).zip`))
        .pipe(gulp.dest('./BackUps/'));
});

// Watch
gulp.task('watch', ['default'], function() {
    console.log('Starting watch task');
    require('./server.js');
    livereload.listen();
    gulp.watch(VIEWS_PATH, ['views']);
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    gulp.watch(CSS_PATH, ['styles']);
});
