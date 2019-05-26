const path = require('path');
const express = require('express'); // "static" is reserved

/*
STATIC ROUTES
*/
module.exports = (server, config, engine) => {
  const staticApp = path.resolve(__dirname, '../../../client/build')
  console.log(`[${process.pid} - Static]: Serving ${staticApp}`)
  server.use(express.static(path.resolve(__dirname, '../../../client/build')));
}
