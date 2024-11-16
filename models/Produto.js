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
  fixa: {
    type: String,
    require: true,
  },
  pneumatica: {
    type: String,
    require: true,
  },
  oleo: {
    type: String,
    require: true,
  },
  simples: {
    type: String,
    require: true,
  },
  duplicada: {
    type: String,
    require: true,
  },
  kos: {
    type: String,
    require: true,
  },
  vke: {
    type: String,
    require: true,
  },
  kosvke: {
    type: String,
    require: true,
  },
  codFeteFrot1: {
    type: Number,
    require: true,
  },
  codFeteFrot2: {
    type: Number,
    require: true,
  },
  codFeteFrot3: {
    type: Number,
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
