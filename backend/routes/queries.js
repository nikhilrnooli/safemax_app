
const express = require('express');
const router = express.Router();
const Query = require('../models/Query');

// GET all queries
router.get('/', async (req, res) => {
  try {
    const queries = await Query.find();
    res.json(queries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve queries' });
  }
});

// POST submit a new query
router.post('/', async (req, res) => {
  const { name, email, message, department } = req.body;

  const newQuery = new Query({
    name,
    email,
    message,
    department,
  });

  try {
    const savedQuery = await newQuery.save();
    res.status(201).json(savedQuery);
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit query' });
  }
});

// PUT update query status
router.put('/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const query = await Query.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(query);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update query status' });
  }
});

module.exports = router;
