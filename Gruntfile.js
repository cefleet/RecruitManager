module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    handlebars: {
      options : {
        namespace : 'RM.Views',
        processName: function(filePath) {
          var name = filePath.replace(/^.*[\\\/]/, '');
          return name.replace('.hbs','');
        }
      },
      all: {
        files: {
          "dev/public/views.js": ["dev/public/templates/**/*.hbs"]
        }
      }
    },

    jshint: {
      options : {
        ignores : ['dev/public/views.js']
      },
      all: ['dev/public/**/*.js']
    },

    concat : {
      options : {
        sourceMap : true
      },
      dev : {
        files : {
          'dev/public/actions.js': ['dev/public/action.js','dev/public/actions/**/*.js'],
          'dev/public/launchers.js': ['dev/public/launcher.js','dev/public/launchers/**/*.js']
        }
      }
    },

    watch: {
      handlebars :{
        files : ["dev/public/templates/**/*.hbs"],
        tasks : ['handlebars']
      },
      testAndCombine : {
        files : ['dev/public/actions/**/*.js','dev/public/launchers/**/*.js'],
        tasks: ['concat','jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  //This is to run while developing
};
