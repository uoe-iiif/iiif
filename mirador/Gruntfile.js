module.exports = function(grunt) {

  // ----------
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-git-describe');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('jasmine-jquery');

  // ----------
  var distribution = 'build/mirador/mirador.js',
      minified = 'build/mirador/mirador.min.js',
      releaseRoot = '../site-build/built-mirador/',

  // libraries/plugins
  vendors = [
    'js/lib/jquery.min.js',
    'js/lib/jquery-ui.custom.min.js',
    'js/lib/jquery-ui.touch-punch.min.js',
    'js/lib/jquery-ui.dialogextend.min.js',
    'js/lib/jquery.scrollTo.min.js',
    'js/lib/handlebars.js',
    'js/lib/openseadragon.min.js',
    'js/lib/jquery.tooltipster.min.js',
    'js/lib/d3.v3.min.js',
    'js/lib/uri.min.js'
  ],

  // libraries/plugins for running tests
  specJs = [
    'spec/lib/jasmine-jquery.js'
  ],

  // source files
  sources = [
    'js/src/mirador.js',
    'js/src/manifestsLoader.js',
    'js/src/viewer.js',
    'js/src/templates.js',
    'js/src/mainMenuWindowOptions.js',
    'js/src/mainMenuLoadWindow.js',
    'js/src/mainMenu.js',
    'js/src/statusBar.js',
    'js/src/layout.js',
    'js/src/manifest.js',
    'js/src/imagesList.js',
    'js/src/normalSequence.js',
    'js/src/AnnotationsLayer.js',
    'js/src/widget.js',
    'js/src/widgetToolbar.js',
    'js/src/lockController.js',
    'js/src/iiif.js',
    'js/src/imageView.js',
    'js/src/scrollView.js',
    'js/src/metadataView.js',
    'js/src/thumbnailsView.js',
    'js/src/widgetStatusBar.js',
    'js/src/widgetContent.js',
    'js/src/openSeadragon.js',
    'js/src/scale.js',
    'js/src/settingsLoader.js',
    'js/src/saveController.js',
    'js/src/annotationBottomPanel.js',
    'js/src/annotationLayerRegionController.js',
    'js/src/annotationListing.js',
    'js/src/annotationSidePanel.js',

  ],

  specs = 'spec/**/*js';


  // ----------
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['build'],
      release: {
        src: [releaseRoot],
        options: {
          force: true
        }
      }
    },

    concat: {
      js: {
        options: {
          banner: '//! <%= pkg.name %> <%= pkg.version %>\n' + '//! Built on <%= grunt.template.today("yyyy-mm-dd") %>\n',
          process: true
        },
        src:  [ "<banner>" ].concat(vendors, sources),
        dest: distribution
      },
      css: {
        src: [ 'css/font-awesome.css', 'css/normalize.css', 'css/jquery-ui.custom.css', 'css/mirador.css', 'css/tooltipster.css', 'css/tooltipster-mirador.css'],
        dest: 'css/mirador-combined.css'
      }
    },

    cssmin: {
      minify: {
        src: 'css/mirador-combined.css',
        dest: 'build/mirador/css/mirador-combined.min.css'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      mirador: {
        src: [ distribution ],
        dest: minified
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          src: 'css/images/**',
          dest: 'build/mirador/'
        }, {
          expand: true,
          src: 'images/**',
          dest: 'build/mirador'
        }, {
          expand: true,
          src: 'font/*',
          dest: 'build/mirador'
        }]
      }
    },

    compress: {
      zip: {
        options: {
          archive: 'build/mirador.zip'
        },
        files: [
          { expand: true, cwd: 'build/', src: ['mirador/**'] }
        ]
      },
      tar: {
        options: {
          archive: 'build/mirador.tar'
        },
        files: [
          { expand: true, cwd: 'build/', src: [ 'mirador/**' ] }
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          base: '.'
        }
      }
    },

    watch: {
      all: {
        options: { livereload: true },
        files: [ 'Gruntfile.js', 'js/src/*.js', 'images/*', 'css/jquery-ui.custom.css', 'css/jquery-ui.custom.min.css', 'css/mirador.css', 'css/normalize.css', 'css/tooltipster-mirador.css', 'css/tooltipster.css' ],
        tasks: 'dev_build'
      }
    },

    jshint: {
      options: {
        browser: true,
        eqeqeq: false,
        loopfunc: false,
        indent: false,
        jshintrc: '.jshintrc',
        globals: {
          Mirador: true
        },
      },
      beforeconcat: sources

    },

    'git-describe': {
      build: {
        options: {
          prop: 'gitInfo'
        }
      }
    },

    jasmine: {
      test: {
        src: sources,
        options: {
          keepRunner: true,
          specs: specs,
          vendor: vendors.concat(specJs)
        }
      },
      coverage: {
        src: sources,
        options: {
          keepRunner: true,
          specs: specs,
          vendor: vendors,
          template : require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'reports/coverage.json',
            report: 'reports/coverage'
          }
        }
      }
    }
  });

  // ----------
  // Copy:release task.
  // Copies the contents of the build folder into the release folder.
  grunt.registerTask('copy:release', function() {
    grunt.file.recurse('build', function(abspath, rootdir, subdir, filename) {
      var dest = releaseRoot +
      (subdir ? subdir + '/' : '/') +
      filename;

      grunt.file.copy(abspath, dest);
    });
  });

  // ----------
  // Build task.
  // Cleans out the build folder and builds the code and images into it, checking lint.
  grunt.registerTask('build', [ 'clean:build', 'git-describe', 'jshint', 'concat', 'cssmin', 'copy', 'uglify' ]);

  // ----------
  // Dev Build task.
  // Build, but skip the time-consuming and obscurantist minification and uglification.
  grunt.registerTask('dev_build', [ 'clean:build', 'git-describe', 'jshint', 'concat', 'copy' ]);

  // ----------
  // Package task.
  // Builds and creates the .zip and .tar files.
  grunt.registerTask('package', ['build', 'compress']);

  // ----------
  // Publish task.
  // Cleans the built files out of the release folder and copies newly built ones over.
  grunt.registerTask('publish', ['package', 'clean:release', 'copy:release']);

  // ----------
  // Default task.
  // Does a normal build.
  grunt.registerTask('default', ['build']);

  // ----------
  // Connect task.
  // Runs server at specified port
  grunt.registerTask('server', ['connect']);

  // ----------
  // Test task.
  // Runs Jasmine tests
  grunt.registerTask('test', 'jasmine:test');

  // ----------
  // Coverage task.
  // Runs instanbul coverage
  grunt.registerTask('coverage', 'jasmine:coverage');
};
