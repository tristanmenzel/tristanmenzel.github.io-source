
var gulp = require('gulp');


var dist = function(){
    return gulp.dest('dist');
};

gulp.task('default', ['html']);


gulp.task('html',[], function(){
    return gulp.src('src/Index.html')
        .pipe(dist());
});