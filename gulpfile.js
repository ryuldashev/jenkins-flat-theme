var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});
