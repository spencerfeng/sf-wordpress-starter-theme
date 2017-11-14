// Include the necessary modules.
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {

    return gulp.src('resources/sass/**/*.scss', ['sass'])
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());

});

// Process JS files and return the stream.
gulp.task('js', function() {

    return gulp.src('resources/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('public/js'));

});

// Create a task that ensures the 'js' task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: 'yourlocal.dev'
    });

    gulp.watch('resources/sass/**/*.scss', ['sass']);
    gulp.watch('**/*.php').on('change', browserSync.reload);
    gulp.watch('resources/js/**/*.js', ['js-watch']);

});