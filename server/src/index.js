// Core process exception handling
require('./lib/exceptions');
// Clustering
require('./lib/clustering');

const express = require('express')
const { Express, HTTP } = require('./setup')
const { API, React } = require('./routes')
const config = require('../config')

// Initialize express instance and configure parsers / sessionware
const server = express()
Express(server, config)

// Initialize routes - API, client pages, etc
API(server, config)
React(server, config, ReactEngine)

// Serve content via HTTP or HTTPS
HTTP(server, config)
