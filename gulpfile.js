var gulp = require('gulp');
var concat = require('gulp-concat');
var base = "/Users/kinglamar/Desktop/webs/date";
var bower = base+"/bower_components";
gulp.task('default', function(){
	return gulp.src([bower+"/angular/angular.min.js",
			bower+"/spin.js/spin.min.js",
			bower+"/moment/min/moment.min.js",
			bower+"/lodash/lodash.min.js",
			bower+"/jquery/dist/jquery.min.js",
			bower+"/sweetalert/dist/sweetalert.min.js",

			bower+"/angular-spinner/angular-spinner.min.js"])

	.pipe(concat('min.js'))
	.pipe(gulp.dest(base))
});
