
const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  department: { type: String, default: 'General' },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

const Query = mongoose.model('Query', querySchema);
module.exports = Query;
