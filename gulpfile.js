/**
 * Created by xiaoyi on 2015/6/26.
 */
var gulp = require('gulp');
var header = require('gulp-header');
var plugins = require('gulp-load-plugins')();

var pkg = require('./package.json');
//加载gulp-load-plugins插件，并马上运行它

var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @author <%= pkg.license %>',
    ' */',
    ''].join('\n');
// js代码检查
gulp.task('jsTest', function () {
    gulp.src('src/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter()); // 输出检查结果
});
// js代码压缩 合并
gulp.task('jsDo', ['jsTest'],function(){
    gulp.src('src/**/*.js')
        .pipe(plugins.uglify())
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.rename('main.min.js'))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['jsDo'],function(){
    console.log('hello world');
});

