require("dotenv").config();
const Clustering = require('./lib/clustering');

const express = require('express')
const { Database, Express, HTTP, Agenda } = require('./setup')
const { API, Static } = require('./routes')

// IIFE to give access to async/await
Clustering(async function() {
  // Initialize express instance and configure parsers / sessionware
  const server = express()

  // MongoDB
  Database(server)
  // Router
  Express(server)
  // Serve Static App Bundles (incl. client app)
  Static(server)
  // APIs
  API(server)
  // Background Jobs (incl. dashboard!)
  Agenda(server)

  // Serve content via HTTP or HTTPS
  HTTP(server)
})
