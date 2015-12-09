var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('style', function() {
    gulp.src('./src/scss/*.scss')
    .pipe(sass()) // добавляем префиксы - http://www.myth.io/
    .pipe(gulp.dest('./build/css/')); // записываем css
//    .pipe(livereload(server)); // даем команду на перезагрузку css
});