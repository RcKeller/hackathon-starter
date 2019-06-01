const express = require('express')
const https = require('https')
const http = require('http')

const { NODE_ENV, HTTP_PORT, HTTPS_PORT } = process.env

const HTTP = (server) => {
  server.listen(HTTP_PORT, (err) => {
    if (err) throw err
    console.log(`HTTP Ready: http://localhost:${HTTP_PORT}`)
  })
}

/*
Node-based HTTPS Strategy
NOTE: This requires signed HTTP keys/certs
We're using basic self-signed certs as a default, expect that to error out in prod
unless you sign your own

NOTE: Most developers use a reverse proxy (e.g. NGINX) for performance instead of this method
*/
const HTTPS = (server) => {
  const { key, cert } = require('openssl-self-signed-certificate')

  // HTTPS
  https
    .createServer({ key, cert }, server)
    .listen(HTTPS_PORT, err => {
      if (err) throw err
      console.log(`> HTTPS Ready on ${HTTPS_PORT}`)
    })

  // HTTP Redirect / reverse proxy
  // (please use NGINX for this in prod, more performant and secure)
  const redirectServer = express()
  redirectServer.get('*', (req, res) => {
    res.writeHead(302, { Location: `https://${req.headers.host}${req.url}` })
    res.end()
  })
  http
    .createServer(redirectServer)
    .listen(HTTPS_PORT, err => {
      if (err) throw err
      console.log(`> HTTP Redirect Enabled: ${HTTP_PORT} >>> ${HTTPS_PORT}`)
    })
}

/*
EXPORTS:
*/
module.exports = process.env.NODE_ENV === 'development' ? HTTP : HTTPS
