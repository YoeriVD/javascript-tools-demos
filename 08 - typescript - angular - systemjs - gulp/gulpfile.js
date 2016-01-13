var gulp = require('gulp')
var wiredep = require('gulp-wiredep')
var ts = require('gulp-typescript')
var browserSync = require('browser-sync').create()
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
               .pipe(browserSync.stream())
})

gulp.task('serve',['build', 'browser-sync'], function(){
    gulp.watch('app/**/*.ts', ['scripts'])
    gulp.watch('dist/**/*.js').on("change", browserSync.reload);
})
 
gulp.task('browser-sync', function(){
    return browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
})

gulp.task('vendorjs', function() {
	return gulp.src(mainBowerFiles())
		.pipe(filter('*.js'))
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist/lib'));

});

gulp.task('copy-html', function(){
    return gulp.src('./app/**/*.html').pipe(gulp.dest('dist'));
})

gulp.task('build', ['scripts', 'vendorjs', 'copy-html'])