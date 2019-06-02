require("dotenv").config();
const { Clustering, Database, Express, Jobs, HTTP } = require('./setup')
const { API, UI } = require('./routes')
const express = require('express')

// IIFE to give access to async/await
Clustering(async function() {
  const server = express()
  Database(server)
  Express(server)
  UI(server)
  API(server)
  Jobs(server)
  HTTP(server)
})
