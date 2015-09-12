/**
 * grunt configuration
 *
 */

'use strict';

var path = require('path');

module.exports = function(grunt){
  var appRoot = path.dirname(__filename);
  console.log(appRoot);
  var serverRoot = path.join(appRoot, 'server');
  
  require('load-grunt-config')(grunt, {
    configPath: path.join(appRoot, 'grunt'),
    data: {
      settings: {
        getServerRootDir : function(){ return serverRoot; },
        getApp : function(){ return path.join(serverRoot, 'app.js'); },
        getViewsDir : function(){ return path.join(serverRoot, 'views'); },        
        getAssetsDir : function(){ return path.join(serverRoot, 'assets'); },
        getAssetsVendorDir : function(){ return path.join(serverRoot, 'assets', 'vendor'); },
        getPublicDir : function(){ return path.join(serverRoot, 'public'); }
      }
    }
  });
};
