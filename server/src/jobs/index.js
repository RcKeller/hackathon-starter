/*
JOBS:
You could add complex logic here to require() jobs based on argv's
But, to keep things simple, we're not going to do that.

@example
const jobTypes = process.env.JOB_TYPES ? process.env.JOB_TYPES.split(',') : [];
jobTypes.forEach(type => {
  require('./lib/jobs/' + type)(agenda);
});
*/
module.exports = [
  // require('./email')
]