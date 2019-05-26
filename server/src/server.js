
const express = require('express')
const { Express, HTTP } = require('./setup')
const { API, Static } = require('./routes')
const config = require('../config')

const Clustering = require('./lib/clustering');

// Core process exception handling
require('./lib/exceptions');

Clustering(() => {
  // Initialize express instance and configure parsers / sessionware
  const server = express()
  Express(server, config)
  
  // Initialize routes - API, client pages, etc
  Static(server, config)
  API(server, config)
  
  // Serve content via HTTP or HTTPS
  HTTP(server, config)
})
