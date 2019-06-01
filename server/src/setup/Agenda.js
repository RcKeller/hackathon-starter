const Agenda = require('agenda');
const Agendash = require('agendash');

const { DB_PROTOCOL, DB_USER, DB_PASSWORD, DB_HOST } = process.env
const DB = `${DB_PROTOCOL}${DB_USER}:${DB_PASSWORD}@${DB_HOST}`

module.exports = (server) => {
  const connectionOpts = {
    db: {
      address: DB,
      collection: 'jobs'
    }
  };
  const agenda = new Agenda(connectionOpts);
  agenda.on('ready', function () {
    // Load jobs, and start agenda IF some jobs are enabled
    const jobs = require('../jobs');
    if (jobs.length) {
      // Starting Agenda returns a promise.
      // Do not handle it, so workers crash + respawn as necessary
      agenda.start()
      // Define each job
      jobs.forEach(job => job(agenda));
      // Serve admin dashboard if agenda is live
      server.use('/admin/dashboard', Agendash(agenda, {
        title: 'Agendash'
      }));
    }
  })
};
