const mongoose = require('mongoose');

const medicalInfoSchema = new mongoose.Schema({
  id: Number,  // Add this field to act as a manual incrementer
  mutuelle: String,
  motif: String,
  diagnostic: String,
  traitement: String,
  dateVisite: { type: Date, default: Date.now }
}, { _id: false });  // Continue to disable the automatic _id generation


const patientSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  dateNaissance: Date,
  adresse: String,
  tel: String,
  tension: String,
  medicalInfos: [medicalInfoSchema], 
  nextMedicalId: { type: Number, default: 1 }  // New field to track the next ID
});

const Patient = mongoose.model('Patients', patientSchema);

module.exports = Patient;
