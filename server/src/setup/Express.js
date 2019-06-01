const compression = require('compression')
const session = require('express-session')
// const cors = require('cors')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan')
const helmet = require('helmet')

const { NODE_ENV } = process.env
const COOKIE_SECRET = 'foobar' // TODO

module.exports = (server) => {
  // Helmet helps you secure your Express servers by setting various HTTP headers
  // https://github.com/helmetjs/helmet
  server.use(helmet())

  // Enable CORS with various options
  // https://github.com/expressjs/cors
  // server.use(cors())

  // GZIP files
  server.use(compression())
  // Basic logger(dev)
  if (NODE_ENV !== 'production') server.use(logger('dev'))

  // Parse incoming request bodies
  // https://github.com/expressjs/body-parser
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  // Sessions (consider using a DB to manage sessions in prod)
  server.use(session({
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }))

  // Lets you use HTTP verbs such as PUT or DELETE
  // https://github.com/expressjs/method-override
  server.use(methodOverride())
}
