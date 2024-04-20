const mongoose = require('mongoose');

const variableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, default: 0 },
});

const Variable = mongoose.model('Variable', variableSchema);

module.exports = Variable;
