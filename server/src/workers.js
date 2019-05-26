// Core process exception handling
require('./lib/exceptions');

// const express = require('express')
// const config = require('../config')

const mongoConnectionString = 'mongodb://127.0.0.1/agenda';

const agenda = new Agenda({db: {address: mongoConnectionString}});

Clustering(async function () {
  agenda.define('delete old users', (job, done) => {
    User.remove({lastLogIn: {$lt: twoDaysAgo}}, done);
  });
  await agenda.start();
  await agenda.every('3 minutes', 'delete old users');
});
