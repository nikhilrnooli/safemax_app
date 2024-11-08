const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  comments: { type: String },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
