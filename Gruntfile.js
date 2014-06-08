
module.exports = function(grunt) {

   require('load-grunt-tasks')(grunt);
   require('time-grunt')(grunt);

   var base = './';

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      shell: {
         markdown: {
            command: 'kramdown resume.md > resume.html'
        }
      },
      sass: {
         dist: {
            files: {
               'css/style.css': 'sass/style.scss',
               'css/style-print.css': 'sass/style-print.scss'
            }
         }
      },
      connect: {
         options: {
            port: 9000,
            livereload: 35729,
            hostname: 'localhost'
         },
         livereload: {
            options: {
               open: true,
               base: [ base ]
            }
         }
      },
      watch: {
         html: {
            files: [
               'resume.md',
               'index.html'
            ],
            tasks: ['shell:markdown'],
            options: {
               livereload: true
            }
         },
         css: {
            files: ['sass/*.scss'],
            tasks: ['sass'],
            options: {
               livereload: true
            }
         }
      }
   });

   grunt.registerTask('build', function () {
        grunt.task.run([
            'sass',
            'shell:markdown',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', ['build']);
}
