/**
MONGOOSE MODELS - these get instantiated asynchronously
but can be referenced earlier
@note mongoose buffers model commands
*/
module.exports = {
  Jobs: require('./Jobs')
}
