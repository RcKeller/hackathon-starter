const { Router } = require('express')
const { serve } = require('express-restify-mongoose')

/**
@param model - Mongoose Model
@param options - express-restify-mongoose options
@see {@link https://florianholzapfel.github.io/express-restify-mongoose/}
*/
module.exports = class Restify {
  constructor (model, options) {
    const router = new Router()
    this.model = model
    this.config = Object.assign({
      // Leave prefix/version undefined by default - less confusing that way
      prefix: '',
      version: '',
      // Case insensitive name
      name: this.model.modelName.toLowerCase(),
      // Return mongo fields by default
      access: () => 'private',
      outputFn: (req, res) => {
        const { statusCode, result } = req.erm
        res.status(statusCode).json(result)
      },
      onError: (err, req, res, next) => {
        const { message } = err
        const { statusCode } = req.erm
        console.error(`ERM:  ${err}`)
        res.status(statusCode).json({ message })
        next()
      }
    }, options)
    serve(router, this.model, this.config)
    console.log(`REST: Serving ...${this.config.prefix}${this.config.version}${this.config.name}`)
    return router
  }
}
