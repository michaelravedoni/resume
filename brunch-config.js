exports.config = {

  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css',
    }
  },

  paths: {
    watched: ['brunch'],
    public: 'assets'
  },

  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
      ]
    },
    cleancss: {
      level: 2
    },
    sass: {
      options: {
        includePaths: ["node_modules/uikit/src/scss"]
      }
    },
  }

}
