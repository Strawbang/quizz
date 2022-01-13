const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizzSchema = new Schema({
    quizz:  String,
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
  });

const Quizz = mongoose.model('Quiz', quizzSchema)

module.exports = Quizz