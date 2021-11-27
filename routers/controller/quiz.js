const quizModel = require("./../../db/models/QuizSchema");

//create qustions
const createQuiz = (req ,res) => {
    const {description , answers , currectanswer} = req.body;
    const newQuiz = new quizModel({
        description ,
        answers,
        currectanswer 
    });
    newQuiz
    .save()
    .then((result) =>{
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err)
    })
}

//get all question
const getAllUquizes = (req, res) => {
    quizModel
      .find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const quiz = {}
// get one question
const getQuiz = (req,res) => {
    const { _id } = req.params;
    quizModel
      .findById({ _id })
      .select()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
}
module.exports = {createQuiz , getAllUquizes , getQuiz}