
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
