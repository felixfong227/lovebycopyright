const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const path = require('path');

const sourcePath = {
    src: path.join(`${__dirname}/src/index.js`),
    dist: path.join(`${__dirname}/dest`)
};

// Turn ES6 JavaScript to ES5 for cors browser compatibility, and also run browserify
gulp.task('compile', () => {
    return gulp.src(sourcePath.src)
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(sourcePath.dist))
})

gulp.task('watch', () => {
    gulp.watch(sourcePath.src, ['compile']);
});

gulp.task('default', [
    'compile',
    'watch'
]);
