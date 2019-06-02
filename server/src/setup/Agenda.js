const Agenda = require('agenda');
const Agendash = require('agendash');
const Database = require('./Database')

module.exports = (server) => {
  const connectionOpts = {
    db: {
      address: Database.address,
      collection: 'jobs',
      options: { useNewUrlParser: true }
    }
  };
  const agenda = new Agenda(connectionOpts);
  agenda.on('ready', () => {
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
        title: 'Dashboard'
      }))
    }
  })
};
