const mongoose = require('mongoose')

const diarySchema = new mongoose.Schema({
  Title:{type: String, required: true},
  Name: {type: String, required: true},
  Date: {type: String, required: true},
  Note: {type: String, required: true},
})
  
  const Diary = mongoose.model('Diary', diarySchema)
  module.exports = Diary