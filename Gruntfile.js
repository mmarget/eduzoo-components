module.exports = function(grunt) {

	grunt.initConfig({
		'gh-pages':{
			src: [
				'3rdparty/**/*',
				'eduzoo-*/**/*',
				'bower_components/**/*',
				'Vagrantfile',
				'Gruntfile.js',
				'bower.json',
				'README.md',
				'Vagrantfile',
				'bootstrap.sh',
				'LICENSE'
			]
		}

	});
	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.registerTask('deploy', ['gh-pages']);
};
