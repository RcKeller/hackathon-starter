const { serve } = require('express-restify-mongoose')
const { API_PREFIX, API_VERSION } = process.env

/**
RESTIFY - composes a REST endpoint given a router, Mongoose model and options
@param router - express.Router instance
@param model - Mongoose Model
@param options - express-restify-mongoose options
@see {@link https://florianholzapfel.github.io/express-restify-mongoose/}
*/
module.exports = class Restify {
  constructor (router, model, options) {
    this.model = model
    this.config = Object.assign({
      // Leave prefix/version undefined by default - less confusing that way
      prefix: '',
      version: '',
      // Case insensitive name
      name: this.model.modelName.toLowerCase(),
      // Return mongo fields by default
      access: () => 'private'
    }, options)
    serve(router, this.model, this.config)
    console.log(`REST: Serving /${API_PREFIX}/${API_VERSION}/${this.config.prefix}${this.config.version}${this.config.name}`)
    return router
  }
}
