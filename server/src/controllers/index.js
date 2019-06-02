/**
CONTROLLERS:
A spread of classes that compose API endpoints,
using an express.Router instance in their constructors
*/
module.exports = [
  // Rest APIs
  ...require('./REST'),
  // An example for an intermediary API
  ...require('./RedHat')
]
