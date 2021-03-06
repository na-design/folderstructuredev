var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var fileinclude = require('gulp-file-include');
var runSequence = require('run-sequence');


// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello Zell!');
})

// Development Tasks 
// -----------------

gulp.task('html', function() {
  return gulp.src('dev/files/pages/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'dev/files/includes'
    }))
    .pipe(gulp.dest('dev/'))
});

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dev'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src('dev/files/scss/**/*.scss') // Gets all files ending with .scss in dev/scss and children dirs
    .pipe(sass()) // Passes it through a gulp-sass
    .pipe(gulp.dest('dev/files/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})


// Watchers
gulp.task('watch', function() {
  gulp.watch('dev/files/scss/**/*.scss', ['sass']);
  gulp.watch('dev/files/**/*.html',['html']);
  gulp.watch('dev/files/**/*.html',browserSync.reload);
  gulp.watch('dev/*.html', browserSync.reload);
  gulp.watch('dev/files/js/**/*.js', browserSync.reload);
})

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {

  return gulp.src('dev/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano({discardComments: {removeAll: true}})))
    .pipe(gulp.dest('dist'));
});


// Optimizing Images 
gulp.task('images', function() {
  return gulp.src('dev/files/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
      optimizationLevel :7
    })))
    .pipe(gulp.dest('dist/images'))
});

// Copying fonts 
gulp.task('fonts', function() {
  return gulp.src('dev/files/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['html', 'sass','browserSync', 'watch', ],
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})


gulp.task('sassdoc', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sassdoc());
});
