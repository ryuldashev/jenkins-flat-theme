var gulp = require('gulp');
var sass = require('gulp-sass');
var inlineimage = require('gulp-inline-image');

gulp.task('sass', function () {
  gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(inlineimage())
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});
