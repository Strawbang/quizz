const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    quizz:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Quizz'
    },
    questions :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }],
    user: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
  });

const Result = mongoose.model('Result', resultSchema)

module.exports = Result