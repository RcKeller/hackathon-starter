const path = require('path');
const express = require('express'); // "static" is reserved

/*
STATIC ROUTES
*/
module.exports = (server, config, engine) => {
  console.warn('DIRNAME', __dirname, path.resolve(__dirname, '../../../client/build'))
  const staticApp = path.resolve(__dirname, '../../../client/build')
  console.log(`[Static]: Serving ${staticApp}`)
  server.use(express.static(path.resolve(__dirname, '../../../client/build')));
}
