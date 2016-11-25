var gulp = require('gulp');

var  browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var less = require("gulp-less");
var path = require('path');

//LESS
gulp.task('less', function(){
	return gulp.src('less/style.less')
		.pipe(less())
		.pipe(gulp.dest('./css'))
		.pipe(reload({stream:true}));
});

//静态服务器
gulp.task('browser-sync', function(){
	browserSync.init({
		files: "**",
		server:{
			baseDir:"./"
		}
	});
	gulp.watch("less/**/*.less", ['less']);
});


gulp.task('default',["less","browser-sync"], function(){
	//默认执行代码写在这里
});