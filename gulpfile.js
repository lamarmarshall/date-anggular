var gulp = require('gulp');
var concat = require('gulp-concat');
var base = "/Users/kinglamar/Desktop/webs/date";
var bower = base+"/bower_components";
gulp.task('default', function(){
	return gulp.src([bower+"/angular/angular.min.js",
            bower+"/angular-ui-bootstrap/src/angular.min.js",
            bower+"/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.min.js",
			bower+"/spin.js/spin.min.js",
			bower+"/moment/min/moment.min.js",
			bower+"/lodash/lodash.min.js",
			bower+"/jquery/dist/jquery.min.js",
			bower+"/sweetalert/dist/sweetalert.min.js",
            bower+"/angular-spinner/angular-spinner.min.js",
            bower+"/hammerjs/hammer.min.js",
            bower+"/AngularHammer/angular.hammer.min.js",
            bower+"/angular-toastr/dist/angular-toastr.min.js",
            ])

	.pipe(concat('min.js'))
	.pipe(gulp.dest(base))
});
