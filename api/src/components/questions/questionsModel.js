const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question:  String,
    answers: [{ answer: String, response: Boolean }],
  });

const Question = mongoose.model('Question', questionSchema)

module.exports = Question