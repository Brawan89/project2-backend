const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
 
 description: String,
 answers: [{type: String}],
 currectanswer: {type: String}
//  alternative: [
//    {
     
    //  text: {
    //    type: String,
    //    required: true
    //  },
    //  isCorrect: {
    //    type: Boolean,
    //    required: true,
    //    default: false
    //  }
//    }
//  ]
});

module.exports = mongoose.model("Quiz", quizSchema);
