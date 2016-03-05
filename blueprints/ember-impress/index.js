/*jshint node:true*/
module.exports = {
  description: '',

  afterInstall: function() {
    return this.addBowerPackageToProject('impress.js', '0.5.3');
  }
};
