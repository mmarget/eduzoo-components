module.exports = function(grunt) {

	grunt.initConfig({
		'gh-pages':{
			src: [
				'3rdparty/**/*',
				'eduzoo-*/**/*',
				'bower_components/**/*',
				'Gruntfile.js',
				'bower.json',
				'README.md',
				'LICENSE'
			]
		}

	});
	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.registerTask('default', ['gh-pages']);
};
