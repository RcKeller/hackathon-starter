const path = require('path');
const express = require('express'); // "static" is reserved

/*
STATIC ROUTES
*/
module.exports = (server, config, engine) => {
  // server.get('*', (req, res) => handle(req, res))
  console.warn('DIRNAME', __dirname)
  server.use(express.static(path.resolve(__dirname, '../../client/build')));
}
