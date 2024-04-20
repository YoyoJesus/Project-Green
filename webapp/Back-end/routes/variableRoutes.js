const express = require('express');
const router = express.Router();
const Variable = require('../models/Variable');

// Get variable value
router.get('/', async (req, res) => {
  try {
    const variable = await Variable.findOne({ name: 'myVariable' });
    res.json(variable);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update variable value
router.patch('/', async (req, res) => {
  try {
    const updatedVariable = await Variable.findOneAndUpdate(
      { name: 'myVariable' },
      { value: req.body.value },
      { new: true }
    );
    res.json(updatedVariable);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;