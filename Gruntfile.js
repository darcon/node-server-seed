/**
 * Created by xiaoyi on 2015/6/26.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // 定义一个用于插入合并输出文件之间的字符
                separator: ';'
            },
            dist: {
                // 将要被合并的文件
                src: ['src/**/*.js'],
                // 合并后的JS文件的存放位置
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                // 此处定义的banner注释将插入到输出文件的顶部
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                // 使用了<%= concat.dist.dest>，因此uglify会自动压缩concat任务中生成的文件
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // 覆盖JSHint默认配置的选项
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });
    // 加载所需要的Grunt插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // 设置task。最重要的是default任务：
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};