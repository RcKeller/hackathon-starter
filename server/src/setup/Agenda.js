const Agenda = require('agenda');
const Agendash = require('agendash');


module.exports = (server, config) => {
  const connectionOpts = {
    db: {
      address: 'localhost:27017/agenda-test',
      collection: 'agendaJobs'
    }
  };
  const agenda = new Agenda(connectionOpts);
  // Load jobs, and start agenda IF some jobs are enabled
  require('./jobs');
  if (jobTypes.length) {
    // Starting Agenda returns a promise.
    // Do not handle it, so workers crash + respawn as necessary
    agenda.start()
    // Serve admin dashboard if agenda is live
    server.use('/admin/dashboard', Agendash(agenda, {
      title: 'Agendash'
    }));
  }
};
