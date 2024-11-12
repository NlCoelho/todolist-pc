const mongoose = require("mongoose");

const discoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    require: true,
  },
  produto: {
    type: String,
    require: true,
  },
  codigo_fete: {
    type: String,
    require: true,
  },
  unidades: {
    type: Number,
    require: true,
  },
  duplicada: {
    type: String,
    require: true,
  },
  simples: {
    type: String,
    require: true,
  },
  oleo: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  
});

module.exports = mongoose.model("produto", discoSchema);
