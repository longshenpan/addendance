//包装函数
module.exports = function(grunt){
	// 任务配置，所有插件的配置信息
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// connect: {
		// 	server: {
		// 		options: {
		// 			hostname: "localhost",
		// 			port: 9000, //run on port 9000
		// 			open: true, //open browser
		// 			keepalive: true//一直保持連接
		// 		}
		// 	}
		// },
		stylus:{
            build: {
                options: {
                    linenos: false,
                    compress: false
                },
                files: [{
                    'static/styles/csses/login.css': ['static/styles/styls/login.styl']
                }]
            }
        },
        //watch file changes and recompile if necessary
		watch: {
			css: {//task
			    files: 'static/styles/styls/login.styl', //where to watch
			    tasks: ['stylus'],
			    options: {
			      livereload: true
			    }
			}
		}
	});

	// grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	// grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// 告诉grunt启动时需要做些什么（注意先后顺序）
	grunt.registerTask('default', ['stylus', 'watch']);
};