// include gulp
var gulp = require('gulp');

// include plug-ins
var concat = require('gulp-concat');
var handlebars = require('gulp-ember-handlebars');
var jshint = require('gulp-jshint');

gulp.task('scripts', function () {
    gulp.src([
        'app/vendor/jquery/dist/jquery.min.js',
        'app/vendor/handlebars/handlebars.min.js',
        'app/vendor/ember/ember.js',
        'app/vendor/ember-data/ember-data.js',
        'app/vendor/ember-localstorage-adapter/localstorage_adapter.js',
        'app/vendor/bootstrap/dist/js/bootstrap.min.js',
        'app/scripts/app.js',
        'app/scripts/router.js',
        'app/scripts/controllers/*.js',
        'app/scripts/models/*.js',
        'app/scripts/routes/*.js',
        'app/scripts/views/*.js'])
        .pipe(concat('application.js'))
        .pipe(gulp.dest('app/'))
});

gulp.task('templates', function () {
    gulp.src(['app/templates/*.hbs',
        'app/templates/**/*.hbs'])
        .pipe(handlebars({outputType: 'browser'}))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('app/'));

});

gulp.task('lint', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
});

gulp.task('default', ['scripts', 'templates'], function () {
    // watch for javascript changes
    gulp.watch('app/scripts/**/*.js', function () {
        gulp.run('scripts');
    });

    // watch for template changes
    gulp.watch('app/templates/**/*.hbs', function () {
        gulp.run('templates');
    });
});