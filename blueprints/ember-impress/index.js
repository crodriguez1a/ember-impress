/*jshint node:true*/
module.exports = {
  description: 'Installs Impress.js',

	normalizeEntityName: function() {
		// this prevents an error when the entityName is
		// not specified (since that doesn't actually matter
		// to us
	},

	afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'impress.js', target: '^0.5.3' }
    ]);
	}
};
