
module.exports = function(grunt) {

	var icontmpdir = 'icon/svg/';


	 var config = {
	    clean: {
	      	icons: ['<%=webfont.icons.dest %>', icontmpdir],
	    },
	
		svgmin: {
	      dist: {
	        files: [{
	          expand: true,
	          cwd: 'icon/src',
	          src: ['*.svg'],
	          dest: icontmpdir
	        }]
	      }
	    },

	    webfont: {
			icons: {
				src: icontmpdir+'*.svg',
				dest: 'icon/font/',
				destCss: 'css/',
				options: {
					engine: 'node',
					hashes: true,
					autoHint: true,
					templateOptions: {
						classPrefix: 'icon-'
					},
					font: 'icons-b2c',
					relativeFontPath: '../icon/font/',
					stylesheet: 'less'
				}
			}
		}

	}

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig(config);
	
	grunt.registerTask('icons', ['svgmin','webfont']);
	// grunt.registerTask('icons', ['webfont']);
	grunt.registerTask('default', ['icons']);
}


