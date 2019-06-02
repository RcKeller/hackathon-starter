const path = require('path');
const express = require('express'); // "static" is reserved

/**
UI ROUTES - serves the static UI bundle
To make/update a static build: cd client && npm run build
*/
module.exports = (server) => {
  const staticApp = path.resolve(__dirname, '../../../client/build')
  server.use(express.static(path.resolve(__dirname, '../../../client/build')));
  console.log(`[${process.pid} - Static]: Serving ${staticApp}`)
}
