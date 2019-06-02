const Restify = require('./restify')
const { Jobs } = require('../../models')

module.exports = class JobsAPI extends Restify {
  constructor (router) {
    super(router, Jobs)
  }
}
