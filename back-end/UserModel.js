const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  telephone: String,
  status: String,
  description: String,
  visitDate: Date
});

// Change the collection name to "Patients"
const User = mongoose.model('Patients', userSchema, 'Patients');

module.exports = User;
