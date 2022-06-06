const mongoose = require('mongoose')

const devoSchema = new mongoose.Schema({
  Title: {type: String, required: true},
  Name: {type: String, required: true},
  Date: {type: String, required: true},
  BibleVerse: {type: String, required: true},
  Note: {type: String, required: true},
  Application: {type: String, required: true},
})
  
  const Devo = mongoose.model('Devo', devoSchema)
  module.exports = Devo