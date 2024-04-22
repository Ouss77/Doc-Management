const express = require('express');
const router = express.Router();
const Patient = require('./UserModel');

router.post('/', async (req, res) => {
  try {
    const newPatient = new Patient({
      nom: req.body.nom,
      prenom: req.body.prenom,
      dateNaissance: req.body.dateNaissance,
      mutuelle: req.body.mutuelle,
      adresse: req.body.adresse,
      tel: req.body.tel,
      motif: req.body.motif,
      dateVisite: req.body.dateVisite,
      diagnostic: req.body.diagnostic,
      traitement: req.body.traitement
    });

    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await Patient.find();
    const formattedUsers = users.map(user => ({
      ...user._doc,
      dateVisite: user.dateVisite ? user.dateVisite.toISOString().split('T')[0] : null, // Format the date of visit if it exists, otherwise set to null
      dateNaissance: user.dateNaissance ? user.dateNaissance.toISOString().split('T')[0] : null // Format the date of birth if it exists, otherwise set to null
    }));
    res.status(200).json(formattedUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Could not fetch users' });
  }
});

// Search patients by name
router.get("/search", async (req, res) => {
  const { nom } = req.query;
  try {
    console.log("Searching patients by name:", nom);
    const patients = await Patient.find({ nom: { $regex: new RegExp(nom, "i") } });
    console.log("Found patients:", patients);
    res.json(patients);
  } catch (err) {
    console.error('Error searching patients by name:', err);
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Find the user by ID and delete it
    await Patient.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Could not delete user' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the _id from the request params
    const updates = req.body; // Get the updates from the request body

    // Find the patient by _id and update it with the provided updates
    const updatedPatient = await Patient.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(updatedPatient);
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
