const { Router } = require('express')
const controllers = require('../controllers')
const middleware = require('../middleware')

const { API_PREFIX, API_VERSION } = process.env

/**
API ROUTES
These typically consume third party APIS and serve them
securely to a same-origin source for security purposes
*/
module.exports = (server) => {
  // Define the API routes and controllers with their own middlewares
  const router = new Router()
  middleware.forEach(Middleware => new Middleware(router))
  controllers.forEach(Controller => new Controller(router))
  // 404 Route for any mismatched routes within /api/<version>/
  router.get('*', (req, res) => res.status(404).json(null))
  // Prefix the API's routes
  server.use(`/${API_PREFIX}/${API_VERSION}/`, router)
}
