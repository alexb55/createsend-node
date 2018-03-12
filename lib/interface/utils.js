var http        = require('http');
var https       = require('https');
var rp          = require('request-promise');
var querystring = require('querystring');
var version     = '0.7.0';
var fs          = require('fs');

module.exports = {
    request: function (secure, auth, method, uri, qs, params) {
        if (auth) {
            if (auth.apiKey !== undefined) {
                auth = 'Basic ' + new Buffer(auth.apiKey + ':magic').toString('base64');
            } else if (auth.username !== undefined) {
                auth = 'Basic ' + new Buffer(auth.username + ':' + auth.password).toString('base64');
            } else if (auth.accessToken !== undefined) {
                auth = 'Bearer ' + auth.accessToken;
            }
        }

        if (qs) {
            uri += '?' + querystring.stringify(qs);
        }

        var options = {
            method: method,
            uri: uri,
            headers: {
                'Authorization': auth,
                'User-Agent': 'node-createsend/v' + version
            },
            body: params,
            timeout: 10000,
            json: true,
        };

        if (secure) {
            options.rejectUnauthorized = true;
        }

        return rp(options);
    }
}
