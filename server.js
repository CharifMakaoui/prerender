#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    chromeLocation: '/app/.apt/usr/bin/google-chrome',
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
