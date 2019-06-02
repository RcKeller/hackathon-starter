const os = require('os');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  data: {},
  type: {
    type: String,
    default: 'normal',
    enum: ['normal', 'single']
  },
  priority: {
    type: Number,
    default: 0,
    min: -20,
    max: 20,
    index: 1
  },
  nextRunAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  lastModifiedBy: {
    type: String,
    default: process.env.AGENDA_NAME || `${os.hostname()}_${process.pid}`
  },
  lockedAt: {
    type: Date,
    index: true
  },
  lastFinishedAt: Date
});

/**
Pending jobs managed by Agenda.JS
@see {@link https://github.com/agenda/agenda}
*/
const Jobs = mongoose.model('Jobs', schema);
module.exports = Jobs
