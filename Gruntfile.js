module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'public/javascripts/**/*.js', 'public/javascripts/*.js']
		}
	});

	grunt.registerTask('default', ['jshint']);
	grunt.loadNpmTasks('grunt-contrib-jshint');
};
