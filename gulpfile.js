'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync'); //.create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('./assets/scss/main.scss')
    .pipe(sass({includePaths: require('node-bourbon').includePaths}).on('error', sass.logError))
    .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('browsersync', function(){
browserSync({
    notify: true,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'browsersync',
    proxy: "localhost:2368",
    port: 3001,
    ui: {
    //port: 8080,
      weinre: {
          port: 9090
      }
    },
    open: "local"
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    //server: ['.tmp', 'app']
  });

  var reload = browserSync.reload;
  gulp.watch(['**/*.hbs'],reload);
  gulp.watch(['assets/**/*.scss'], ['sass'] );
  gulp.watch(['assets/css/**/*.css'],reload );
  gulp.watch(['assets/**/*.js'], reload);
  gulp.watch(['assets/images/**/*'], reload);
});
