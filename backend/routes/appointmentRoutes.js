const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve appointments' });
  }
});


// POST create a new appointment
router.post('/', async (req, res) => {
    const { name, email, date, comments, status } = req.body;
  
    const newAppointment = new Appointment({
      name,
      email,
      date,
      comments,
      status,
    });
  
    try {
      const savedAppointment = await newAppointment.save();
      res.status(201).json(savedAppointment); // Respond with the created appointment
    } catch (error) {
      res.status(500).json({ message: 'Failed to create appointment' });
    }
  });

  
// PUT update appointment status
router.put('/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update appointment status' });
  }
});

module.exports = router;

