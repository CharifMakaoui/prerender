module.exports = require('./lib');

var server = prerender({
    chromeLocation: '\app\.apt\usr\bin\google-chrome'
});

server.start();
