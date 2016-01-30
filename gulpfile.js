var gulp = require('gulp');
var concat = require('gulp-concat');
var base = "/Users/kinglamar/Desktop/webs/date";
var bower = base+"/bower_components";
gulp.task('default', function(){
	return gulp.src([bower+"/angular/angular.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js",
            "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.14.3/ui-bootstrap.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.14.3/ui-bootstrap-tpls.min.js",
            "http://www.parsecdn.com/js/parse-1.6.12.min.js",
            bower+"/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.min.js",
			bower+"/spin.js/spin.min.js",
			bower+"/moment/min/moment.min.js",
			bower+"/lodash/lodash.min.js",
		    "js/angular-translate.min.js",
			bower+"/sweetalert/dist/sweetalert.min.js",
            bower+"/angular-spinner/angular-spinner.min.js",
            bower+"dropzone/dist/min/dropzone.min.js",
            bower+"/hammerjs/hammer.min.js",
            bower+"/AngularHammer/angular.hammer.js",
            bower+"/angular-ui-bootstrap/src/angular.min.js",
            bower+"/angular-toastr/dist/angular-toastr.min.js",
            ])

	.pipe(concat('min.js'))
	.pipe(gulp.dest(base))
});
//             "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js",
//     bower+"/AngularHammer/angular.hammer.min.js",
// bower+"/angular-ui-bootstrap/src/angular.min.js",