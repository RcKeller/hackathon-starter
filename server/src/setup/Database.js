const mongoose = require('mongoose')
const { DB_PROTOCOL, DB_USER, DB_PASSWORD, DB_HOST } = process.env

const address = `${DB_PROTOCOL}${DB_USER}:${DB_PASSWORD}@${DB_HOST}`

/**
Sets up mongodb
@property address - Full MongoDB connection string
*/
module.exports = ()  => {
  const connect = () => {
    // mongoose.Promise = require('bluebird')
    mongoose.connect(address, { useNewUrlParser: true }, (err) => {
      if (err) {
        console.warn(`===>  Error connecting to ${DB_HOST}\n${err}`)
      } else {
        console.log(`===>  Succeeded in connecting to ${DB_HOST}`)
      }
    })
  }

  // Connect and require models, thus initializing them
  connect()
  // require('../models')

  // Log errors and auto-reconnect
  mongoose.connection.on('error', console.log)
  mongoose.connection.on('disconnected', connect)
}

// Export the DB address - helpful elsewhere
module.exports.address = address
