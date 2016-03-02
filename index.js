/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-impress',
  init: function(app) {
    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.optional = this.options.babel.optional || [];

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators');
    }
  },
  included: function(app, parentAddon) {
     // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }
    this._super.included(app);

    var target = (parentAddon || app);
    var options = target.options.emberImpress || {};

    if (!('includeImpressAssets' in options)) {
      options.includeImpressAssets = true;
    }

    if (options.includeImpressAssets) {
      target.import(target.bowerDirectory + "/impress.js/js/impress.js");
    }
  }
};
