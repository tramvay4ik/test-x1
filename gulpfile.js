var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');

var config = {
    sassPath: './src/scss',
    bowerDir: './bower_components'
}

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/main.scss')
        .pipe(sass({
            includePaths: [
                config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                config.bowerDir + '/font-awesome/scss'
            ],
        })).pipe(prefixer())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('js', function() {
    return gulp.src(config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.min.js')
        .pipe(gulp.dest('./build/js'));
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./build/fonts'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'js', 'icons']);
