/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['API_HOST']
    }
  });

  app.import('bower_components/material-design-lite/material.min.js');
  app.import('bower_components/material-design-lite/material.min.css');

  return app.toTree();
};
