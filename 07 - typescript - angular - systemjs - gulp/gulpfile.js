//   "test": "karma",
//     "wiredep" : "node wiredep.js",
//     "prestart": "ntsc && npm run wiredep",
//  serve
var gulp = require('gulp')
var wiredep = require('gulp-wiredep')
var ts = require('gulp-typescript')
var browserSync = require('browser-sync')
var filter = require('gulp-filter')
var concat = require('gulp-concat')
var mainBowerFiles = require('main-bower-files')

gulp.task('scripts', function(){
    return gulp.src('app/src/**/*.ts')
               .pipe(ts({
                   module : 'system',
                   target : 'es5'
               }))
               .pipe(gulp.dest('dist/src'))
})

gulp.task('watch',['build', 'browserSync'], function(){
    gulp.watch('app/**/*.ts', ['scripts'])
        .pipe(browserSync.reload({
            stream : true
        }));
})
 
gulp.task('wiredep', function () {
  return gulp.src('./app/index.html')
    .pipe(wiredep({
        
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('browserSync', function(){
    return browserSync({
        server: {
            baseDir: 'dist'
        }
    })
})

gulp.task('vendorjs', function() {

	var jsFiles = ['src/js/*'];

	return gulp.src(mainBowerFiles().concat(jsFiles))
		.pipe(filter('*.js'))
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist/lib'));

});

gulp.task('copy-html', function(){
    return gulp.src('./app/**/*.html').pipe(gulp.dest('dist'));
})

gulp.task('build', ['scripts', 'vendorjs', 'copy-html'])