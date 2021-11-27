const express = require('express')
const {createQuiz , getAllUquizes , getQuiz} = require("./../controller/quiz")

const quizRouter = express.Router()

// get all quiz questions
quizRouter.get('/questions', getAllUquizes)

// get one quiz question
quizRouter.get('/question/:_id', getQuiz)

// create one quiz question
quizRouter.post('/questions',createQuiz)

module.exports = quizRouter