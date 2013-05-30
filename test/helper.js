var fakeweb = require('node-fakeweb');
var fs      = require('fs');

fakeweb.allowNetConnect = false;

module.exports = {
  baseScheme: 'https',
  baseUri: 'api.createsend.com',
  stubPost: function (uri, responseFile) {
    fakeweb.registerUri({
      uri: this.baseScheme + '://' + this.baseUri + (this.baseScheme == 'https' ? ':443' : '') + '/api/v3/' + uri,
      body: fs.readFileSync(__dirname + '/fixtures/' + responseFile)
    })
  }
}