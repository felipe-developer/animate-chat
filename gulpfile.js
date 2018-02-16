var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	minifyjs = require('gulp-js-minify'),
	watch = require('gulp-watch');

gulp.task('minify-css', function() {
  gulp.src('./assets/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build'))
});
 
gulp.task('minify-js', function(){
  gulp.src('./assets/js/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['minify-css','minify-js'], function () { 
    gulp.watch('./assets/css/*.css', ['minify-css']);
    gulp.watch('./assets/js/*.js', ['minify-js']);
});