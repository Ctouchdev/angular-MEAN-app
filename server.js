const http = require('http');
const debug = require('debug')('node-angular');
const app = require('./backend/app');
const express = require('express');

//Install express server
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static('./dist/mean-project'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/mean-project/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
