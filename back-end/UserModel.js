const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  dateNaissance: Date,
  mutuelle: String,
  adresse: String, 
  tel: String,
  motif:String,
  dateVisite:  { type: Date, default: Date.now }
});

const Patient = mongoose.model('Patients', patientSchema);

module.exports = Patient;
