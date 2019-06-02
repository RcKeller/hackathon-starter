const Restify = require('./restify')
const { Jobs } = require('../../models')

module.exports = class Users extends Restify {
  constructor () {
    super(Jobs)
  }
}