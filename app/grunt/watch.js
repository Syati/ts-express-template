var path = require('path');

module.exports = {
  options: {
    livereload: true
  },
  typescript: {
    files: [path.join('<%= settings.getServerRootDir() %>', '**/*.ts')],
    tasks: ['newer:typescript:default']
  },
  rsync: {
    files: [path.join('<%= settings.getAssetsDir() %>', 'images/**/*')],
    tasks: ['rsync:default']
  },
  // for livereload
  less: {
    files: [path.join('<%= settings.getAssetsDir() %>', 'stylesheets/**/*.less')]
  },
  jade: {
    files: [path.join('<%= settings.getViewsDir() %>', '**/*.jade')]
  }
};
