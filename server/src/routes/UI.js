const path = require('path');
const express = require('express'); // "static" is reserved

/*
STATIC ROUTES (for the UI)
*/
module.exports = (server) => {
  const staticApp = path.resolve(__dirname, '../../../client/build')
  server.use(express.static(path.resolve(__dirname, '../../../client/build')));
  console.log(`[${process.pid} - Static]: Serving ${staticApp}`)
}
