var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
    	
    	proxy: 'http://localhost:5555/'
    });
    gulp.watch("views/*.jade").on("change", browserSync.reload);
});