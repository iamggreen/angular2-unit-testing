var gulp = require('gulp');

gulp.task('copy:libs', function() {
    [
        'es6-shim',
        'system-polyfills',
        'angular2',
        'systemjs',
        'rxjs',
        'jasmine-core'        
    ].forEach(function(name) {
       gulp.src(['node_modules/' + name + '/**/*.js', 'node_modules/' + name + '/**/*.css'])
        .pipe(gulp.dest('./src/libs/' + name)); 
    });   
});