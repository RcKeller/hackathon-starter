const cluster = require('cluster');
const os = require('os')

/*
STATUS JOB: Basic status reporter, a good no-frills example
*/
module.exports = function (agenda) {
  const bytesPerGB = 1073741824
  /* DEFINTION */
  agenda.define('status', async (job, done) => {
    try {
      const report = {
        PID: process.pid,
        master: cluster.isMaster,
        system: {
          hostname: os.hostname(),
          os: `${os.platform()} ${os.release()}`,
          cpus: os.cpus().length,
          freememory: `${(os.freemem() / bytesPerGB).toFixed(2)}/${(os.totalmem() / bytesPerGB).toFixed(2)} GB`,
          uptime: `${os.uptime() / 60} minutes`
        }
      }
      job.attrs.data = report
      await job.save
      done()
    } catch (err) {
      done(err)
    }
  });
  /* SCHEDULE */
  agenda.now('status')
  // agenda.every('2 minutes', 'status');
};
