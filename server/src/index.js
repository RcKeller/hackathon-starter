
const express = require('express')
const { Express, HTTP, Agenda } = require('./setup')
const { API, Static } = require('./routes')
const config = require('../config')

const Clustering = require('./lib/clustering');

// Core process exception handling
require('./lib/exceptions');

// IIFE to give access to async/await
Clustering(async function() {
  // Initialize express instance and configure parsers / sessionware
  const server = express()

  // Router
  Express(server, config)
  // Serve Static App Bundles (incl. client app)
  Static(server, config)
  // APIs
  API(server, config)
  // Background Jobs (incl. dashboard!)
  // Agenda(server, config)

  // Serve content via HTTP or HTTPS
  HTTP(server, config)
})
