const express = require('express');
const router = express.Router();
const User = require('./UserModel');

router.post('/', async (req, res) => {
  try {
    // Parse the visitDate received from the frontend
    const visitDate = new Date(req.body.visitDate);

    // Convert the parsed date to YYYY-MM-DD format
    const formattedVisitDate = visitDate.toISOString().split('T')[0];

    const newUser = new User({
      fullName: req.body.fullName,
      telephone: req.body.telephone,
      status: req.body.status,
      description: req.body.description,
      visitDate: formattedVisitDate  // Save the formatted date to the database
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error adding user:', err);
    res.status(500).json({ error: 'Could not add user' });
  }
});


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    const formattedUsers = users.map(user => ({
      ...user._doc,
      visitDate: user.visitDate.toISOString().split('T')[0] // Format the date
    }));
    res.status(200).json(formattedUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Could not fetch users' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Find the user by ID and delete it
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Could not delete user' });
  }
});
module.exports = router;
