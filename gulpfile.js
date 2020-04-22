var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/sass/**/*.scss', gulp.task('sass'));
});

