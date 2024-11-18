const mongoose = require('mongoose');

const segmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  criteria: {
    spendingThreshold: Number,
    visitCount: Number,
    lastVisitDays: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Segment', segmentSchema);